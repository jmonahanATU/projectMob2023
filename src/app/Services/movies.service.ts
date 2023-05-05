import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  GetMovieData():Observable<any>
  {
    return this.http.get("https://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27");
  }
}