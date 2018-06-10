import { Component, OnInit, OnChanges } from '@angular/core';
import { Task } from '../../classes/task';
import { User } from '../../classes/user';

import { debounce } from 'lodash';
import { TaskQuery } from '../../enums/task-query.enum';

import { orderBy } from 'lodash';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit, OnChanges {
  user: User;
  activeTask: Task;
  DebouncedSaveUser: Function;
  activeQuery: TaskQuery = TaskQuery.NONE;
  queriedTasks: Task[];

  constructor() {}

  ngOnInit() {
    this.user = this.GetUser();
    this.DebouncedSaveUser = debounce(this.SaveUser, 1000);
    this.queriedTasks = this.QueryTasks(this.user.tasks);
  }

  ngOnChanges() {
    this.queriedTasks = this.QueryTasks(this.user.tasks);
  }

  UpdateTasks(query: TaskQuery) {
    this.activeQuery = query;
    this.queriedTasks = this.QueryTasks(this.user.tasks);
  }

  SetActiveTask(task: Task) {
    this.activeTask = task;

    this.DebouncedSaveUser(); // A little redundant but catches all list changes.
  }

  GetUser(): User {
    const data = localStorage.getItem('app_todo_user');
    let user;

    if (data) {
      user = JSON.parse(data);
    } else {
      user = new User();
    }

    return user;
  }

  SaveUser() {
    localStorage.setItem('app_todo_user', JSON.stringify(this.user));
    console.log('Saving User');
  }

  ShiftUp(task: Task) {
    const index = this.user.tasks.indexOf(task)

    // Array will now be one shorter
    this.user.tasks.splice(index, 1);
    // Insert one above
    this.user.tasks.splice(index - 1, 0, task);
  }

  ShiftDown(task: Task) {
    const index = this.user.tasks.indexOf(task)

    // Array will now be one shorter
    this.user.tasks.splice(index, 1);
    // Insert one above
    this.user.tasks.splice(index + 1, 0, task);
  }

  QueryTasks(tasks: Task[]): Task[] {
    if (this.activeQuery === TaskQuery.NONE) {
      return tasks;
    }

    if (this.activeQuery === TaskQuery.DUE) {
      return orderBy(tasks, ['dueDate', 'desc']);
    }
  }

  DeleteTask(task: Task) {
    const index = this.user.tasks.indexOf(task)
    // Delete
    this.user.tasks.splice(index, 1);
    // Clear Focus
    this.activeTask = null;
    // Requery tasks
    this.queriedTasks = this.QueryTasks(this.user.tasks);
  }
}
