import { Component, OnInit } from '@angular/core';
import { Bookmodel } from '../../models/book.model';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  public books: Bookmodel[]=[];
  constructor(public publicService: PublicService) { }

  ngOnInit(): void {
    this.books=this.publicService.getAllBooks();    
  }

}
