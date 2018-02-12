import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import { AlertMessageService } from './alert-message.service';
import { TaskService } from './task.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    TaskService,
    AlertMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
