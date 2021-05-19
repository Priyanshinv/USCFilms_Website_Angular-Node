import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FetchdataServiceService } from '../../fetchdata-service.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Router} from '@angular/router';

@Component({
  selector: 'app-movie-carousel-component',
  templateUrl: './movie-carousel-component.component.html',
  styleUrls: ['./movie-carousel-component.component.css']
})
export class MovieCarouselComponentComponent implements OnInit {
  @Input() name: string;
  @Input() movieId: string;
  popMovies: any;
  caption2:string;
  removeIndicators: any;
  colClass:any;
  justifyCenter:any;
  containerClass:any;
  colClass2:any;
  imageDiv:string;
  imageHeight:string;
  carousel1:string;
  containerClass2:string;
  constructor(private srv: FetchdataServiceService, private breakpointObserver: BreakpointObserver, private router: Router) { 
	
  }
  ngOnChanges() {
	this.ngOnInit();
  }
  ngOnInit(): void {
	this.breakpointObserver.observe(
	  '(min-width: 768px)'
    ).subscribe(result => {
      if (result.matches) {
	    this.caption2="";
		this.colClass2="";
		this.containerClass="";
		this.removeIndicators="";
		this.colClass="col-2";
		this.justifyCenter="";
		this.imageDiv="imageDiv";
		this.imageHeight="13rem";
		this.carousel1="carousel1";
		this.containerClass2="container";
	    if(this.name=="Popular Movies")
			this.srv.getPopularMovies().subscribe(images => this.popMovies = images);
		else if(this.name=="Trending Movies")
			this.srv.getTrendingMoviesAll().subscribe(images => this.popMovies = images);
		else if(this.name=="Top Rated Movies")
			this.srv.getTopRatedMovies().subscribe(images => this.popMovies = images);
		else if(this.name=="Popular TV Shows")
			this.srv.getPopularTVShows().subscribe(images => this.popMovies = images);
		else if(this.name=="Trending TV Shows")
			this.srv.getTrendingTVShows().subscribe(images => this.popMovies = images);
		else if(this.name=="Top Rated TV Shows")
			this.srv.getTopRatedTVShows().subscribe(images => this.popMovies = images);
		else if(this.name=="Recommended Movies")
			this.srv.getRecommendedMovies(this.movieId).subscribe(images => this.popMovies = images);
		else if(this.name=="Similar Movies")
			this.srv.getSimilarMovies(this.movieId).subscribe(images => this.popMovies = images);
		else if(this.name=="Recommended TV Shows"){
			this.srv.getRecommendedTV(this.movieId).subscribe(images => this.popMovies = images);
			console.log("recccc "+this.movieId);
			}
		else if(this.name=="Similar TV Shows")
			this.srv.getSimilarTV(this.movieId).subscribe(images => this.popMovies = images);
		else if(this.name=="Continue Watching"){
			this.popMovies=this.srv.getContinueWatching();
		}
		
      }
	  else{
	  this.colClass="col-8";
	  this.colClass2="colClass2";
		this.caption2="caption2";
		this.containerClass2="";
		this.carousel1="";
		this.imageDiv="imageDiv2 imageDiv";
		this.containerClass="container";
		this.removeIndicators="removeIndicators";
		this.justifyCenter="justify-content-center";
		this.imageHeight="15rem";
		if(this.name=="Popular Movies")
			this.srv.getPopularMovies_1().subscribe(images => this.popMovies = images);
		else if(this.name=="Trending Movies")
			this.srv.getTrendingMoviesAll_1().subscribe(images => this.popMovies = images);
		else if(this.name=="Top Rated Movies")
			this.srv.getTopRatedMovies_1().subscribe(images => this.popMovies = images);
		else if(this.name=="Popular TV Shows")
			this.srv.getPopularTVShows_1().subscribe(images => this.popMovies = images);
		else if(this.name=="Trending TV Shows")
			this.srv.getTrendingTVShows_1().subscribe(images => this.popMovies = images);
		else if(this.name=="Top Rated TV Shows")
			this.srv.getTopRatedTVShows_1().subscribe(images => this.popMovies = images);
		else if(this.name=="Recommended Movies")
			this.srv.getRecommendedMovies_1(this.movieId).subscribe(images => this.popMovies = images);
		else if(this.name=="Similar Movies")
			this.srv.getSimilarMovies_1(this.movieId).subscribe(images => this.popMovies = images);
		else if(this.name=="Recommended TV Shows")
			this.srv.getRecommendedTV_1(this.movieId).subscribe(images => this.popMovies = images);
		else if(this.name=="Similar TV Shows")
			this.srv.getSimilarTV_1(this.movieId).subscribe(images => this.popMovies = images);
		else if(this.name=="Continue Watching"){
			this.popMovies=this.srv.getContinueWatching_1();
		}
	  }
    });
  }
  
 
  goToWatch(id,media_type){
	this.router.navigate(['/watch/'+media_type,id]);
  }

}
