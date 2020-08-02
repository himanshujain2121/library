import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss']
})
export class NewBooksComponent implements OnInit {

  bookRegister: FormGroup;
  constructor(private bookService:BookService,private formBuilder: FormBuilder,
    private route:Router) { }

  ngOnInit() {
    this.bookRegister = this.formBuilder.group({
      bookName: ['', Validators.required],
      authotName: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onSubmit(){
    this.bookService.addBook(this.bookRegister.value).subscribe(
      data => {
        this.route.navigate(['/library']);
      },
      err =>{
        console.log(err);
      }
    );
  }
}
