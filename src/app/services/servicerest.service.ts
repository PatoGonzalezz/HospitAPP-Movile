import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../clases/User';

@Injectable({
  providedIn: 'root'
})
export class ServicerestService {

  URL: string = `https://nancyb3a.github.io/Test_/usuarios_PGY4121_08.json`;

  httpHeader = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
   }),
  };

  constructor(private http: HttpClient) { }

  getUser(id: any): Observable<User[]>{
    return this.http.get<User[]>(`${this.URL}/users/`+ id).pipe(
      tap((_) => console.log(`User fetched: ${id}`)),
      catchError(this.handleError<User[]>(`Get user id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
