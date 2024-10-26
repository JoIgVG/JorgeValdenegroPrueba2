import { Component, OnInit } from '@angular/core';
import { PeliculasApiService } from 'src/app/services/peliculas-api.service';

@Component({
  selector: 'app-movies-api',
  templateUrl: './movies-api.page.html',
  styleUrls: ['./movies-api.page.scss'],
})
export class MoviesApiPage implements OnInit {
  items:any=[];
  constructor(
    private peliculaApiService:PeliculasApiService
  ) { }

  ngOnInit() {
    const movies=localStorage.getItem('movies');
    if(movies){
      this.items=JSON.parse(movies);
      console.log('Peliculas en el almacenamiento local')
    }else{
      this.peliculaApiService.ObtenerPeliculas().subscribe((movies)=>{
        console.log('Peliculas alcanzadas desde la API');
        this.items=movies;
        localStorage.setItem('movies',JSON.stringify(this.items));
      })
    }
  }

}
