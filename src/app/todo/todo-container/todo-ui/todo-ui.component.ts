import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-ui',
  templateUrl: './todo-ui.component.html',
  styleUrls: ['./todo-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoUiComponent {

  @Input() todos;
  @Input() todo: string;
  @Input() editing = false;

  @Output() addTodo = new EventEmitter<any>();
  @Output() deleteTodo = new EventEmitter<any>();
  @Output() editTodo = new EventEmitter<any>();
  @Output() cancelEdit = new EventEmitter<any>();
  @Output() updateTodo = new EventEmitter<any>();
  @Output() toggleDone = new EventEmitter<any>();

}
