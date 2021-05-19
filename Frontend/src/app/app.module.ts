import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MylistComponent } from './mylist/mylist.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrendingMoviesCarouselComponent } from './home/trending-movies-carousel/trending-movies-carousel.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MovieCarouselComponentComponent } from './home/movie-carousel-component/movie-carousel-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MylistComponent,
    TrendingMoviesCarouselComponent,
    WatchMovieComponent,
    MovieCarouselComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	NgbModule,
	HttpClientModule,
	YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
