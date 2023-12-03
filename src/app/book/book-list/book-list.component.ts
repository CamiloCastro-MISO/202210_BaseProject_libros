import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<Book> = [];
  selectedBook!: Book;
  selected: Boolean = false; //Inicializamos la variable selected en false y luego cuando el usuario selecciona un libro, le cambiamos el valor a true.

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  onSelected(book: Book): void {
    this.selected = true;
    this.selectedBook = book;
  }

}
