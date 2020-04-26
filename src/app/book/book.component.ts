import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
//import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
   this.api.getBooks().subscribe(
      (res:(any)) => this.books = res.message);
      
  }
}

// export class BookDataSource extends DataSource<any> {
//   constructor(private api: ApiService) {
//     super()
//   }

//   connect() {
//     return this.api.getBooks();
//   }

//   disconnect() {

//   }
// }
