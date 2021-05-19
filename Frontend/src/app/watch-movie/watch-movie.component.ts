import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FetchdataServiceService } from '../fetchdata-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {MovieCarouselComponentComponent} from '../home/movie-carousel-component/movie-carousel-component.component';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {
	id:string;
	movieVideo:any;
	movieDetails:any;
	movieReviews:any;
	movieCast:any;
	castId:any;
	castDetails:any;
	castExternalId:any
	castImgSrc:any;
	firstClass:string;
	secondClass:string;
	videoFirstClass:string;
	videoSecondClass:string;
	cardClass:string;
	reviewFirstClass:string;
	reviewSecondClass:string;
	myStorage = window.localStorage;
	buttonid:string;
	buttonText:string;
	alertType:string;
	private _success = new Subject<string>();
	alertMessage="";
	mediaType:string;
	scrollmenu2:string;
	padContainer:string;
	padMobile:string;
	widthDesktop:string;
	containerClass:string;
	videoHeight:string;
	restrictHeight:string;
	toggleOval1:string;
	toggleOval2:string;
	
	@ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;
	
  constructor(private route:ActivatedRoute, private srv: FetchdataServiceService, private modalService: NgbModal, private breakpointObserver: BreakpointObserver) {
	
  }
  
  ngOnChanges() {
	this.ngOnInit();
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(
	  '(min-width: 768px)'
    ).subscribe(result => {
      if (result.matches) {
        this.firstClass="col-3";
		this.secondClass="col-9";
		this.videoFirstClass="col-8";
		this.videoSecondClass="col-4";
		this.cardClass="col-2";
		this.reviewFirstClass="col-1";
		this.reviewSecondClass="col-11";
		this.scrollmenu2="";
		this.padContainer="";
		this.padMobile="";
		this.widthDesktop="widthDesktop";
		this.containerClass="container";
		this.videoHeight="";
		this.restrictHeight="restrictHeight";
		this.toggleOval1="showOval";
		this.toggleOval2="hideOval";
		
      }
	  else{
		this.firstClass="col-12";
		this.secondClass="col-12";
		this.videoFirstClass="col-12";
		this.videoSecondClass="col-12";
		this.cardClass="col-6";
		this.reviewFirstClass="col-3";
		this.reviewSecondClass="col-12";
		this.scrollmenu2="scrollmenu2";
		this.padContainer="padContainer";
		this.padMobile="padMobile";
		this.widthDesktop="";
		this.containerClass="";
		this.videoHeight="100%";
		this.restrictHeight="";
		this.toggleOval1="hideOval";
		this.toggleOval2="showOval";
	  }
    });
	this.route.params.subscribe(routeParams => {
		this.id=routeParams.id;
		this.mediaType=routeParams.media_type;
		if(this.mediaType=="movie"){
			this.srv.getMovieVideo(this.id).subscribe(video => this.movieVideo = video);
			this.srv.getMovieDetails(this.id).subscribe(details => 
				{
				this.movieDetails = details;
				this.addToWatch(this.movieDetails['id'],this.movieDetails['title'],this.movieDetails['poster_path'],this.movieDetails['media_type']);
				});
			this.srv.getMovieCast(this.id).subscribe(cast => this.movieCast = cast);
			this.srv.getMovieReviews(this.id).subscribe(reviews => this.movieReviews = reviews);
		}
		else if(this.mediaType=="tv"){
			this.srv.getTVVideo(this.id).subscribe(video => this.movieVideo = video);
			this.srv.getTVDetails(this.id).subscribe(details => 
				{
				this.movieDetails = details;
				this.addToWatch(this.movieDetails['id'],this.movieDetails['title'],this.movieDetails['poster_path'],this.movieDetails['media_type']);
				});
			this.srv.getTVCast(this.id).subscribe(cast => this.movieCast = cast);
			this.srv.getTVReviews(this.id).subscribe(reviews => this.movieReviews = reviews);
		}
		if(window.localStorage.getItem("watchList")==undefined || window.localStorage.getItem("watchList")==null){
		this.buttonid="add";
		this.buttonText="Add to";
	}
	
	else{
		if(this.id in JSON.parse(window.localStorage.getItem("watchList"))){
			this.buttonid="remove";
			this.buttonText="Remove from";
		}
		else{
			this.buttonid="add";
			this.buttonText="Add to";
		}
	}
	
	
	this._success.subscribe(message => this.alertMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
	window.scrollTo(0, 0);
	});
	
	
  }
  
  addToWatch(id,title,image,media_type){
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
  }

  
  openModal(event, content) {
	var target = event.target || event.srcElement || event.currentTarget;
    this.castId = target.attributes.id.nodeValue;
	this.castImgSrc = (<HTMLImageElement>document.getElementById("img"+this.castId)).src;
	this.srv.getCastDetails(this.castId).subscribe(castDetails => this.castDetails = castDetails);
	this.srv.getCastExternalIds(this.castId).subscribe(castExternalId => this.castExternalId = castExternalId);
	this.modalService.open(content, { size: 'lg', scrollable: true });
  }
  
  addToList(elem){
    var jsonObj = {};
	jsonObj['title']=this.movieDetails['title'];
	jsonObj['image']=this.movieDetails['poster_path'];
	jsonObj['id']=this.id;
	jsonObj['media_type']=this.movieDetails['media_type'];
	jsonObj['time']=new Date().getTime();
    if(this.buttonid=="add"){
		this.buttonid="remove";
		this.buttonText="Remove from";
		if(window.localStorage.getItem("watchList")==undefined || window.localStorage.getItem("watchList")==null){
			var mainJsonObj={};
			mainJsonObj[this.id]=jsonObj;
			window.localStorage.setItem("watchList",JSON.stringify(mainJsonObj));
		}
		else{
			var tempObj = JSON.parse(window.localStorage.getItem("watchList"));
			tempObj[this.id]=jsonObj;
			window.localStorage.setItem("watchList",JSON.stringify(tempObj));
		}
		this.alertType="success";
		this._success.next(`Added to watchlist.`);
	}
	else{
		var tempObj = JSON.parse(window.localStorage.getItem("watchList"));
		delete tempObj[this.id];
		window.localStorage.setItem("watchList",JSON.stringify(tempObj));
		this.buttonid="add";
		this.buttonText="Add to";
		this.alertType="danger";
		this._success.next(`Removed from watchlist.`);
	}
  }

}
