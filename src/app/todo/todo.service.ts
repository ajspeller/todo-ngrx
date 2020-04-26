import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_DONE } from '../reducers/todo.reducer';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<any>) { }

  getTodos(): Observable<any> {
    return this.store.select('todoReducer');
  }

  addTodo(value) {
    this.store.dispatch({
      type: ADD_TODO,
      payload: {
        value,
        done: false
      }
    });
  }

  deleteTodo(index) {
    this.store.dispatch({
      type: DELETE_TODO,
      payload: {
        index
      }
    });
  }

  updateTodo(updatedTodo, indexToEdit) {
    this.store.dispatch({
      type: UPDATE_TODO,
      payload: {
        index: indexToEdit,
        newValue: updatedTodo
      }
    });
  }

  toggleDone(todo, index) {
    console.log('todo: ', todo);
    console.log('index: ', index);
    this.store.dispatch({
      type: TOGGLE_DONE,
      payload: {
        index,
        done: todo.done
      }
    });
  }

}
