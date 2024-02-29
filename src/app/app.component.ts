import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ListadoPeliculasComponent } from './peluculas/listado-peliculas/listado-peliculas.component';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './Utilidades/rating/rating.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,UserComponent,ListadoPeliculasComponent,MenuComponent,RatingComponent,CicloDeVidaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})


//Metodo de ciclo de vida del componente 1 de estos
export class AppComponent implements OnInit {

  constructor(){};

  ocultar=false;
  ngOnInit(): void {

setTimeout(() => { 

  this.peliculasEncine = [{
    Id: 1,
    titulo:'Spider-Man',
    fechaLanzamieneto: new Date(),
    precio: 1400.99
  },{
    Id:2,
    titulo:'Avangers',
    fechaLanzamieneto: new Date(),
    precio: 1700.99
  }];
}, 3000);
  
  }
title = 'Angular 17';  

peliculasEncine;
PeliculasExtrenos = [];


manejarRated(voto: number): void {
  alert(voto);
}

};


