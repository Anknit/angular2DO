import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Message } from './message';

import { AlertMessageService } from './alert-message.service';

@Injectable()
export class TaskService {

  constructor(
    private messageService: AlertMessageService,
    private http: HttpClient
  ) { }

  private tasksUrl = 'http://localhost/aluminiportal/server/request.php?request=getCourseData';

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  message:Message;

  getTasks(): Observable<Task[]> {
    this.message = {id:2, message: 'Fetched tasks'};
    this.messageService.setMessage(this.message);
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError(this.handleError('getTasks', []))
      );
  }

  getTask(id: number): Observable<Task> {
    return of(TASKS.find(task => task.id === id));
  }

}
