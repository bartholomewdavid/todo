import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../classes/task';
import { TaskStatus } from '../../enums/task-status.enum';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  @Input() task: Task;

  @Output() taskChange: EventEmitter<any> = new EventEmitter();
  @Output() deleteTask: EventEmitter<Task> =new EventEmitter();

  statuses = [TaskStatus.PENDING, TaskStatus.COMPLETE];

  constructor() { }

  ngOnInit() {
  }

  EmitChange() {
    this.taskChange.emit();
  }

  DeleteTask() {
    this.deleteTask.emit(this.task);
  }
}
