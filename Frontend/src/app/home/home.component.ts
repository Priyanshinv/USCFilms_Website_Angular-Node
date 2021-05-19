import { Component, OnInit} from '@angular/core';
import { FetchdataServiceService } from '../fetchdata-service.service';

import {TrendingMoviesCarouselComponent} from './trending-movies-carousel/trending-movies-carousel.component';
import {MovieCarouselComponentComponent} from './movie-carousel-component/movie-carousel-component.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { 
  }
  ngOnInit(): void {
  window.scrollTo(0, 0);
  }
}
