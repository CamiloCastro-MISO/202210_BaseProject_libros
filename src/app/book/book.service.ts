import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importamos HttpClient

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http: HttpClient) { } // Inyectamos HttpClient

}
