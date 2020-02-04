import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { BookService } from '../book.service';


@Component({
  selector: 'app-listen08',
  templateUrl: './listen08.component.html',
  styleUrls: ['./listen08.component.scss']
})
export class Listen08Component implements OnInit {

  books: any;

  constructor(
    private httpService: HttpService,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.httpService.getData().subscribe(
      data => {
        console.log(data);
        this.books = data;
      },
      error => console.log(error),
      () => console.log('finish')
    );

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
        this.books = data;
      },
      error => console.log(error),
      () => console.log('finish')
    );
  }

}
