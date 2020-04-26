import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-ui',
  templateUrl: './todo-ui.component.html',
  styleUrls: ['./todo-ui.component.css']
})
export class TodoUiComponent implements OnInit {

  @Input() todos$: Observable<any>;

  @Output() addTodo = new EventEmitter<any>();
  @Output() deleteTodo = new EventEmitter<any>();
  @Output() editTodo = new EventEmitter<any>();
  @Output() cancelEdit = new EventEmitter<any>();
  @Output() updateTodo = new EventEmitter<any>();
  @Output() toggleDone = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
