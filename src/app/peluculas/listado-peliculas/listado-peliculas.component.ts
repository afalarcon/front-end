import { Component, Input, OnInit, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListadoGenericoComponent } from '../../Utilidades/listado-generico/listado-generico.component';




@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [CommonModule,ListadoGenericoComponent],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
constructor(){}
@Input()  peliculas;
  ngOnInit(): void {
   
  }
  
remover(indicePelicula: number): void {
  this.peliculas.splice(indicePelicula,1);
}

}
