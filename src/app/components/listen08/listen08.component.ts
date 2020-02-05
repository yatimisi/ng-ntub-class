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
    name: '',
    price: 0,
    description: '',
    is_online: true,
  };

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
      },
      error => console.log(error),
      () => console.log('finish')
    );
  }

}
