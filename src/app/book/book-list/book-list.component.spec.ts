/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookListComponent } from './book-list.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BookService } from "../book.service";
import { Book } from "../book";
import { Editorial } from 'src/app/editorial/editorial';
import { faker } from '@faker-js/faker';}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BookListComponent],
      providers: [BookService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;

    const editorial = new Editorial(
      faker.datatype.number(),
      faker.lorem.sentence()
    );

    for (let i = 0; i < 10; i++) {
      const book = new Book(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.date.past(),
        editorial,
      );
      component.books.push(book);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
