import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { NewBooksComponent } from './new-books/new-books.component';


const routes: Routes = [
  {path:'',redirectTo:'library', pathMatch: 'full' },
  { path: 'library', component: LibraryBooksComponent },
  { path: 'update/:bid', component: UpdateBooksComponent },
  { path: 'add', component: NewBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
