import { Component, OnInit } from '@angular/core';
import{MoviesService} from'../Services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage  {

  myMovies:any[] = [];

  constructor(private service:MoviesService) 
  {
    
  }

  ionViewWillEnter()
  {
    this.service.GetMovieData().subscribe((data)=>{
      this.myMovies = data.Search});
  }
  
}
