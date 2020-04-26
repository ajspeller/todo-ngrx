import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-ui',
  templateUrl: './todo-ui.component.html',
  styleUrls: ['./todo-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoUiComponent implements OnInit {

  @Input() todos;
  @Input() todo: string;
  @Input() editing = false;

  @Output() addTodo = new EventEmitter<any>();
  @Output() deleteTodo = new EventEmitter<any>();
  @Output() editTodo = new EventEmitter<any>();
  @Output() cancelEdit = new EventEmitter<any>();
  @Output() updateTodo = new EventEmitter<any>();
  @Output() toggleDone = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  add(todo) {
    this.addTodo.emit(todo);
  }

  update(todo) {
    this.updateTodo.emit(todo);
  }

  edit(todo, index) {
    this.editTodo.emit({todo, index});
  }

  delete(index) {
    this.deleteTodo.emit(index);
  }

  toggle(todo, index) {
    this.toggleDone.emit({todo, index});
  }

  cancel() {
    this.cancelEdit.emit();
  }

}
