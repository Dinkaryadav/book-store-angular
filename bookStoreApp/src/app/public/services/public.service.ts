import { Injectable } from '@angular/core';
import { Bookmodel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor() { }

  public getAllBooks(): Bookmodel[]{
      return[
        {
          "id" : 1,
          "title" : "Angular",
          "totalPages" : 234,
          "auther":"Ajit",
          "price":{
            "currency":"INR",
            "value":122
          }
      },
      {
        "id" : 2,
        "title" : "Java",
        "totalPages" : 234,
        "auther":"Ajit",
        "price":{
          "currency":"INR",
          "value":122
        }
    },
    {
      "id" : 3,
      "title" : "Oracle",
      "totalPages" : 234,
      "auther":"Ajit",
      "price":{
        "currency":"INR",
        "value":122
      }
  }
      ];
  }
}
