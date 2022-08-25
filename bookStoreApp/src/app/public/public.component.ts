import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookmodel } from './models/book.model';
import { PublicService } from './services/public.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
 
 
  constructor() {    
   }

  ngOnInit(): void {
    
  }

}
