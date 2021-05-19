import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  myList:any;
  idList=[];
  colClass:any;
  containerClass:any;
  imageDiv:string;
  caption2:string;
  colClass2:string;
  marginBottom:string;
  imageDivHeight:string;
  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }
  
  ngOnChanges() {
	this.ngOnInit();
  }
  
  ngOnInit(): void {
	  
	  this.breakpointObserver.observe(
		  '(min-width: 768px)'
		).subscribe(result => {
		  if (result.matches) {
			this.colClass="col-2";
			this.containerClass="";
			this.caption2="";
			this.colClass2="";
			this.imageDiv="imageDiv";
			this.imageDivHeight="14rem";
			this.marginBottom="4rem";
			var jsonObj = JSON.parse(window.localStorage.getItem("watchList"));
			var tempList=[];
			var count=0;
			this.idList=this.getWatchList();
		  }
		  else{
			this.caption2="caption2";
			this.imageDiv="imageDiv2 imageDiv";
			this.colClass="col-8";
			this.colClass2="col-8";
			this.imageDivHeight="18rem";
			this.marginBottom="4rem";
			this.containerClass="container";
			this.idList=this.getWatchList_1();
		  }
		});
  
	this.idList.sort(function(a, b)
	 {
	  var x = b["time"]; var y = a["time"];
	  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	 });
	 window.scrollTo(0, 0);
  }
  
  
  createSortedVisitedListArray(){
	var states=[];
	var jsonObj = JSON.parse(window.localStorage.getItem("watchList"));
	for(var x in jsonObj){
		states.push(jsonObj[x]);
	}
	states.sort(function(a, b)
	 {
	  var x = b["time"]; var y = a["time"];
	  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	 });
	return states;
  }
  
  getWatchList(){
    const sortedArray = this.createSortedVisitedListArray();
	const states=[];
	var innerArray=[];
	var count=0;
	for (var i=0;i<sortedArray.length;i++){
		if(count!=0 && count%6==0){
			states.push(innerArray);
			innerArray=[];
		}
		innerArray.push(sortedArray[i]);
		count++;
	}
	if(innerArray.length!=0)
	states.push(innerArray);
	return states;
  }
  
  getWatchList_1(){
	const sortedArray = this.createSortedVisitedListArray();
	const states=[];
	for(var i=0;i<sortedArray.length;i++){
		var innerArray=[];
		innerArray.push(sortedArray[i]);
		states.push(innerArray);
	}
	
	return states;
  }
  
  goToWatch(id,title,image,media_type){
	var jsonObj={};
	jsonObj['title']=title;
	jsonObj['image']=image;
	jsonObj['id']=id;
	jsonObj['media_type']=media_type;
	jsonObj['time']=new Date().getTime();
	if(window.localStorage.getItem("visitedList")==undefined || window.localStorage.getItem("visitedList")==null){
	    var mainJsonObj={};
		mainJsonObj[id]=jsonObj;
		window.localStorage.setItem("visitedList",JSON.stringify(mainJsonObj));
	}
	
	else{
		var tempObj = JSON.parse(window.localStorage.getItem("visitedList"));
		if(id in tempObj){
			delete tempObj[id];
		}
		tempObj[id]=jsonObj;
		window.localStorage.setItem("visitedList",JSON.stringify(tempObj));
	}
	this.router.navigate(['/watch/'+media_type,id]);
  }
  

}
