import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { NewBooksComponent } from './new-books/new-books.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryBooksComponent,
    UpdateBooksComponent,
    NewBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
