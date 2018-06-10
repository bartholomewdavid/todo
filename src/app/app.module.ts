import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoAppComponent } from './components/todo-app/todo-app.component';
import { FormsModule } from '@angular/forms';
import { StatusPipe } from './pipes/status.pipe';
import { QueryPipe } from './pipes/query.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoAppComponent,
    StatusPipe,
    QueryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
