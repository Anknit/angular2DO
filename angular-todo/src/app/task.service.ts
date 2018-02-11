import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Message } from './message';

import { AlertMessageService } from './alert-message.service';

@Injectable()
export class TaskService {

  constructor(private messageService: AlertMessageService) { }
  message:Message;

  getTasks(): Observable<Task[]> {
    this.message = {id:2, message: 'Fetched tasks'};
    this.messageService.setMessage(this.message);
    return of(TASKS);
  }

}
