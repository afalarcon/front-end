import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, input } from '@angular/core';
import { RatingComponent } from '../Utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {
  //no es un evento del ciclo de vida de un componente, inyectamos servicios
  //creamos un servicio para que fucnione AfterVieInt despues de que se renderice la pagina
  constructor(private changeDetectorRef: ChangeDetectorRef) {};

@Input()
titulo: string;

@ViewChild(RatingComponent)
ratingComponent: RatingComponent;

timer: ReturnType<typeof setInterval>;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.ratingComponent.ratingSeleccionado = 3;
    this.changeDetectorRef.detectChanges();
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
   
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    clearInterval(this.timer);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
    
  }
  ngOnInit(): void {    
    console.log('ngOnInit');
this.timer = setInterval(()=> console.log(new Date()),1000);
  }

}
