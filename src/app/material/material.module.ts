import { NgModule } from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'



@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
    

  ],
  imports: [
    CommonModule
    
  ],
  providers: [provideClientHydration()]
})
export class MaterialModule { }
