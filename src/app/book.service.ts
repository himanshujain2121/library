import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string = 'http://localhost:8080/'
  constructor(private http: HttpClient) { }

  getAllBooks(){
    return this.http.get(this.url+'allBooks');
  }

  updateBook(id,book:any){
    return this.http.put(this.url+"update/"+id,book);
  }

  addBook(books:any){
    let book = [];
    book.push(books);
    var library = { id:101, book };
    return this.http.post( this.url+'saveBooks',library);
  }

  getEachBook(id:any){
   return this.http.get(this.url+"book/"+id);
  }
}
