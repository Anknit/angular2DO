import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';

import { AlertMessageService } from '../alert-message.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private alertMessageService: AlertMessageService
  ) { }

  ngOnInit() {
    this.alertMessage = {id:1,message:'Fetching Tasks'};
    this.getTasks();
  }
  selectedTask: Task;
  alertMessage: Message;
  tasks: Task[];
  task: Task = {
    id: 1,
    taskName: "My first task"
  };
  onTaskSelect(task: Task): void {
    this.selectedTask = task;
  }
  getTasks(): void{
    this.taskService.getTasks()
      .subscribe(tasks => {this.tasks = tasks; this.alertMessage = this.alertMessageService.getMessage();});
  }

}
