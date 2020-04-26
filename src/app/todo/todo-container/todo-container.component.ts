import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_DONE } from 'src/app/reducers/todo.reducer';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos$: Observable<any>;

    todo: string;
  editing = false;
  indexToEdit: number | null;

  constructor(private store: Store<any>,
              private todoService: TodoService) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.todos$ = this.store.select('todoReducer');
  }

  addTodo(value) {
    this.store.dispatch({
      type: ADD_TODO,
      payload: {
        value,
        done: false
      }
    });
    this.todo = '';
  }

  deleteTodo(index) {
    this.store.dispatch({
      type: DELETE_TODO,
      payload: {
        index
      }
    });
  }

  editTodo(todo, index) {
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
    this.store.dispatch({
      type: UPDATE_TODO,
      payload: {
        index: this.indexToEdit,
        newValue: updatedTodo
      }
    });
  }

  toggleDone(todo, index) {
    this.store.dispatch({
      type: TOGGLE_DONE,
      payload: {
        index,
        done: todo.done
      }
    });
  }

}
