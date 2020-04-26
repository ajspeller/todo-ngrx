import { TodoService } from './../todo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {
  todo: string;
  editing = false;
  indexToEdit: number | null;

  constructor(public todoService: TodoService) { }

  addTodo(value) {
    this.todoService.addTodo(value);
    this.todo = '';
  }

  deleteTodo(index) {
    this.todoService.deleteTodo(index);
  }

  editTodo({todo, index}) {
    this.editing = true;
    this.todo = todo.value;
    this.indexToEdit = index;
  }

  cancelEdit() {
    this.editing = false;
    this.todo = '';
    this.indexToEdit = null;
  }

  updateTodo(updatedTodo) {
    this.todoService.updateTodo(updatedTodo, this.indexToEdit);
  }

  toggleDone({todo, index}) {
    this.todoService.toggleDone(todo, index);
  }

}
