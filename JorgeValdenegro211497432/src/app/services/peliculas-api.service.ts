import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


type movies = {
  id: string
  movie_id: string
  title: string
  overview: string
  release_date: string
  poster_path: string
  popularity: string
  price: string
  category: string
  duration: string
}

@Injectable({
  providedIn: 'root'
})


export class PeliculasApiService {
  url = "https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100";
  constructor(
    private http:HttpClient
  ) { }

  ObtenerPeliculas():Observable<movies[]>{
    return this.http.get<movies[]>(this.url);
  }

}
