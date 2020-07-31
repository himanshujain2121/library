import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss']
})
export class NewBooksComponent implements OnInit {

  form = new FormGroup({
    bookName: new FormControl('', Validators.required),
    authotName: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
   });
   
  constructor(private bookService:BookService) { }

  ngOnInit() {
   
  }

  onSubmit(){
    var book = {
      "bookName": this.form.value.bookName,
      "authotName": this.form.value.authotName,
      "price": this.form.value.price
    }
    this.bookService.addBook(book).subscribe();
  }

}
