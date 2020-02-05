import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.serverIP}/books`);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${environment.serverIP}/books/${id}`);
  }

  postBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${environment.serverIP}/books`, book);
  }
}
