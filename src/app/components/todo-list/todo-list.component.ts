import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../classes/task';
import { TaskStatus } from '../../enums/task-status.enum';
import { TaskQuery } from '../../enums/task-query.enum';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() activeTask: Task;

  @Output() activeTaskSelect: EventEmitter<Task> = new EventEmitter();
  @Output() shiftUp: EventEmitter<Task> = new EventEmitter();
  @Output() shiftDown: EventEmitter<Task> = new EventEmitter();
  @Output() updateQuery: EventEmitter<TaskQuery> = new EventEmitter();

  activeQuery: TaskQuery = TaskQuery.NONE;
  queries = [
    TaskQuery.NONE,
    TaskQuery.DUE
  ];

  constructor() { }

  ngOnInit() {
  }

  UpdateQuery() {
    this.updateQuery.emit(this.activeQuery);
  }

  CreateTask() {
    const task = new Task(
      'Task Placeholder Title',
      'Enter descriptions here...',
      TaskStatus.PENDING,
      undefined
    );

    this.tasks.push(task);
    this.EmitActiveTask(task);
  }

  EmitActiveTask(task: Task) {
    this.activeTaskSelect.emit(task);
  }

  IsComplete(task: Task) {
    return task.status === TaskStatus.COMPLETE;
  }

  ShiftUp(task: Task) {
    this.shiftUp.emit(task);
  }

  ShiftDown(task: Task) {
    this.shiftDown.emit(task);
  }
}
