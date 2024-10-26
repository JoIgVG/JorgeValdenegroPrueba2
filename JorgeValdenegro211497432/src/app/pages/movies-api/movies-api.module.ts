import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesApiPageRoutingModule } from './movies-api-routing.module';

import { MoviesApiPage } from './movies-api.page';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasApiService } from 'src/app/services/peliculas-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesApiPageRoutingModule,
    HttpClientModule
  ],
  providers:[PeliculasApiService],
  declarations: [MoviesApiPage]
})
export class MoviesApiPageModule {}
