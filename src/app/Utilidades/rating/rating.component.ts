import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module'; 
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MaterialModule,NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {

@Input() maximoRating =5;
@Input() ratingSeleccionado = 0;
@Output() 
rated: EventEmitter<number> = new EventEmitter<number>();
votado=false;
raitingAnterior;
maximoRatingArr=[];
  ngOnInit(): void {
 this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }
  manejarMouseLeave(){
    if(this.raitingAnterior !== 0){
      this.ratingSeleccionado = this.raitingAnterior;
    }else{  
      this.ratingSeleccionado = 0;
    }
    
  }
  rate(index: number): void{
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.raitingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

}
