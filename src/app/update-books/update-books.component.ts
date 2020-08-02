import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.scss']
})
export class UpdateBooksComponent implements OnInit {

  public parameterValue: string;
  book;
  form = new FormGroup({
    bookName: new FormControl('', Validators.required),
    authotName: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
   });
  constructor( private _activatedRoute: ActivatedRoute,private bookService:BookService,
    private route:Router) { }

  ngOnInit() {
    
    this.parameterValue = this._activatedRoute.snapshot.params.bid;
    this.bookService.getEachBook(this.parameterValue).subscribe(
      (data:any) => {
        console.log(data);
        this.form.patchValue({  
          bookName: data.bookName,  
          authotName: data.authotName,
          price: data.price
      });  
      }
    )
  }
  onSubmit(){
    this.bookService.updateBook(this.parameterValue,this.form.value).subscribe(
      data => {
        this.route.navigate(['/library']);
      },
      err =>{
        console.log(err);
      }
    );
  }
}
