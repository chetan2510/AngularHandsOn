import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import {User} from './users';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// To make sure that the HeroService can provide this service, register it with the injector,
// which is the object that is responsible for choosing and injecting the provider where the app requires it.
// By default, the Angular CLI command ng generate service registers a provider with the root
// injector for your service by including provider metadata, that is providedIn: 'root' in the @Injectable() decorator.
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private usersUrl = 'http://localhost:9902/user/getallusers';

  // ng generate service hero
  // Services are a great way to share information among classes that don't know each other.
  // You'll create a MessageService and inject it in two places.
  // The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.
  constructor(private messageService: MessageService, private http: HttpClient) { }


  //Observable is one of the key classes in the RxJS library.
  getHeroes(): Hero[] {
    return HEROES;
  }

  public getUsers(): Observable<any> {
    console.log("Request made");
    return this.http.get(this.usersUrl);
    // return this.http.get<User[]>(this.usersUrl);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 }
