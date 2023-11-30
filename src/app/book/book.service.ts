import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importamos HttpClient
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = environment.baseUrl + 'books';

  constructor(private http: HttpClient) { } // Inyectamos HttpClient

}
