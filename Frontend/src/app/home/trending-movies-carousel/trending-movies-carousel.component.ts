import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FetchdataServiceService } from '../../fetchdata-service.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Router} from '@angular/router';

@Component({
  selector: 'app-trending-movies-carousel',
  templateUrl: './trending-movies-carousel.component.html',
  styleUrls: ['./trending-movies-carousel.component.css']
})
export class TrendingMoviesCarouselComponent implements OnInit {

  images: any;
  removeIndicators: any;
  caption2: string;
  imageDiv: string;
  carouselResponsive:string;
  imageDivResponsive:string;
  containerClass:string;
  constructor(private srv: FetchdataServiceService, private breakpointObserver: BreakpointObserver, private router: Router) { 
  }
  ngOnChanges() {
	this.ngOnInit();
  }
  ngOnInit(): void {
  this.srv.getTrendingMovies().subscribe(images => this.images = images);
  this.breakpointObserver.observe(
	  '(min-width: 768px)'
    ).subscribe(result => {
      if (result.matches) {
		this.removeIndicators="";
		this.caption2="";
		this.imageDiv="imageDiv";
		this.carouselResponsive="carousel2Desktop";
		this.imageDivResponsive="imageDivDesktop";
		this.containerClass="container";
	  }
	  else{
		this.removeIndicators="removeIndicators";
		this.caption2="caption2";
		this.imageDiv="imageDiv2 imageDiv";
		this.carouselResponsive="carousel2Mobile";
		this.imageDivResponsive="imageDivMobile";
		this.containerClass="";
	  }
	});
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  
  goToWatch(id,media_type){
	this.router.navigate(['/watch/'+media_type,id]);
  }
}
