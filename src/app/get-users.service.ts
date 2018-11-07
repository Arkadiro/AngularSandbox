import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: Http) { }

  getUser(){
    return this.http.get(this.url)
      .pipe(
        map(
          (response: Response) => response.json()
        )
      )
  }
}
