import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../message';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeMessage(): void{
    this.message = null;
  }

  @Input() message: Message;

}
