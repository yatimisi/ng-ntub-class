import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';


@Component({
  selector: 'app-listen08',
  templateUrl: './listen08.component.html',
  styleUrls: ['./listen08.component.scss']
})
export class Listen08Component implements OnInit {

  books: Book[];
  book: Book;
  postBook: Book = {
    name: 'OwO',
    price: 2147483647,
    description: 'QwQ',
    is_online: true,
  };
  putBook: Book;
  patchBook: Book;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      data => {
        console.log(data);
        this.books = data;
      },
      error => console.log(error),
      () => console.log('finish')
    );

    this.bookService.getBook(1).subscribe(
      data => {
        console.log(data);
        this.book = data;
        this.putBook = data;
        this.patchBook = data;
      },
      error => console.log(error),
      () => console.log('finish')
    );
  }

  create() {
    this.bookService.postBook(this.postBook).subscribe(console.log);
  }

  put() {
    this.bookService.putBook(this.putBook.id, this.putBook).subscribe(console.log);
  }

  patch() {
    this.bookService.patchBook(this.patchBook.id, this.patchBook).subscribe(console.log);
  }
}
