import { Component } from '@angular/core';
import {Observable, pipe, empty, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter, switchMap} from 'rxjs/operators';
import { FetchdataServiceService } from './fetchdata-service.service';
import { Router} from '@angular/router';

declare function searchResults():any;

const statesWithFlags = [
  {'title': 'Alabama', 'image': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},
  {'title': 'Alaska', 'image': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'}
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMenuCollapsed = true;
  constructor(private srv: FetchdataServiceService, private router: Router) { }
  title = 'my-app';
  public model: any;
  clickedItem:string;
  result:any;
  
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(100),
      map(term => {
	  
	  if(term === '')
		return [];
	else{
        this.srv.getData(term).subscribe(res => this.result=res)
		return this.result;
		}
	})
    )

  formatter = (x: {title: string}) => x.title;
  
  selectedItem(item){
    var jsonObj={};
	item.item.title='';
	this.isMenuCollapsed = true;
    this.router.navigate(['/watch/'+item.item.media_type,item.item.id]);
  }
}
