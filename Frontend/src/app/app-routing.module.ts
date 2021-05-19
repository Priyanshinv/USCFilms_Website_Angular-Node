import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MylistComponent } from './mylist/mylist.component';
import {WatchMovieComponent} from './watch-movie/watch-movie.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'mylist', component: MylistComponent },
	{ path: 'watch/:media_type/:id', component: WatchMovieComponent },
	{ path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
