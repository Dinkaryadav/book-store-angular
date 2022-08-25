import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { PublicService } from './services/public.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PublicModule { }
