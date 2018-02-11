import { Injectable } from '@angular/core';

import { Message } from './message';
@Injectable()
export class AlertMessageService {

  constructor() { }
  message:Message;
  setMessage(message:Message): void {
    this.message = message;
  }
  getMessage(): Message{
    return this.message;
  }

}
