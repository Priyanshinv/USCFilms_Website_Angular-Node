import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchdataServiceService {

  constructor(private http: HttpClient) { }
  
  getData(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/searchResults",{params});
	return states;
  }
  
  getTrendingMovies(){
	const states = this.http.get("/api/trendingMovies");
	return states;
  }
  
  capLocalStorage(states){
	var tempArray=[];
	for(var i=0;i<24;i++){
		tempArray.push((states[i]));
	}
	var removeIdList=[];
	for(var i=24;i<states.length;i++){
		removeIdList.push(states[i]["id"]);
	}
	var jsonObj = JSON.parse(window.localStorage.getItem("visitedList"));
	for(var i=0;i<removeIdList.length;i++){
	console.log(removeIdList[i]);
		delete jsonObj[removeIdList[i]];
	}
	window.localStorage.setItem("visitedList",JSON.stringify(jsonObj));
	return tempArray;
  }
  
  createSortedVisitedListArray(){
	var states=[];
	var jsonObj = JSON.parse(window.localStorage.getItem("visitedList"));
	for(var x in jsonObj){
		states.push(jsonObj[x]);
	}
	states.sort(function(a, b)
	 {
	  var x = b["time"]; var y = a["time"];
	  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	 });
	 if(states.length>=25){
		states=this.capLocalStorage(states);
	 }
	return states;
  }
  
  getContinueWatching_1(){
	const sortedArray = this.createSortedVisitedListArray();
	const states=[];
	for(var i=0;i<sortedArray.length;i++){
		var innerArray=[];
		innerArray.push(sortedArray[i]);
		states.push(innerArray);
	}
	
	return states;
  }
  
  getContinueWatching(){
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
  
  getPopularMovies(){
	const states = this.http.get("/api/popularMovies/");
	return states;
  }
  
  getPopularMovies_1(){
	const states = this.http.get("/api/popularMovies1/");
	return states;
  }
  
  getTopRatedMovies(){
	const states = this.http.get("/api/topRatedMovies");
	return states;
  }
  
  getTopRatedMovies_1(){
	const states = this.http.get("/api/topRatedMovies1");
	return states;
  }
  
  getTrendingMoviesAll(){
	const states = this.http.get("/api/trendingMoviesAll");
	return states;
  }
  
  getTrendingMoviesAll_1(){
	const states = this.http.get("/api/trendingMoviesAll1");
	return states;
  }
  
  getPopularTVShows(){
	const states = this.http.get("/api/popularTVShows/");
	return states;
  }
  
  getPopularTVShows_1(){
	const states = this.http.get("/api/popularTVShows1/");
	return states;
  }
  
  getTopRatedTVShows(){
	const states = this.http.get("/api/topRatedTVShows/");
	return states;
  }
  
  getTopRatedTVShows_1(){
	const states = this.http.get("/api/topRatedTVShows1/");
	return states;
  }
  
  getTrendingTVShows(){
	const states = this.http.get("/api/trendingTVShows/");
	return states;
  }
  
  getTrendingTVShows_1(){
	const states = this.http.get("/api/trendingTVShows1/");
	return states;
  }
  
  getRecommendedMovies(movieId: string){
    const params = new HttpParams().set('params', movieId);
	const states = this.http.get("/api/recommendedMovies/",{params});
	return states;
  }
  
  getRecommendedMovies_1(movieId: string){
   const params = new HttpParams().set('params', movieId);
	const states = this.http.get("/api/recommendedMovies1/",{params});
	return states;
  }
  
  getSimilarMovies(movieId: string){
  const params = new HttpParams().set('params', movieId);
	const states = this.http.get("/api/similarMovies/",{params});
	return states;
  }
  
  getSimilarMovies_1(movieId: string){
  const params = new HttpParams().set('params', movieId);
	const states = this.http.get("/api/similarMovies1/",{params});
	return states;
  }
  
  getRecommendedTV(movieId: string){
    const params = new HttpParams().set('params', movieId);
	const states = this.http.get("/api/recommendedTV/",{params});
	return states;
  }
  
  getRecommendedTV_1(movieId: string){
   const params = new HttpParams().set('params', movieId);
	const states = this.http.get("/api/recommendedTV1/",{params});
	return states;
  }
  
  getSimilarTV(movieId: string){
  const params = new HttpParams().set('params', movieId);
	const states = this.http.get("/api/similarTV/",{params});
	return states;
  }
  
  getSimilarTV_1(movieId: string){
  const params = new HttpParams().set('params', movieId);
	const states = this.http.get("/api/similarTV1/",{params});
	return states;
  }
  
  getMovieVideo(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getMovieVideo/",{params});
	return states;
  }
  
  getMovieDetails(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getMovieDetails/",{params});
	return states;
  }
  
  getMovieCast(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getMovieCast/",{params});
	return states;
  }
  
  getMovieReviews(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getMovieReviews/",{params});
	return states;
  }
  
  getTVVideo(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getTVVideo/",{params});
	return states;
  }
  
  getTVDetails(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getTVDetails/",{params});
	return states;
  }
  
  getTVCast(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getTVCast/",{params});
	return states;
  }
  
  getTVReviews(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getTVReviews/",{params});
	return states;
  }
  
  getCastDetails(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getCastDetails/",{params});
	return states;
  }
  
  getCastExternalIds(query:string){
  const params = new HttpParams().set('params', query);
	const states = this.http.get("/api/getCastExternalIds/",{params});
	return states;
  }
  
}