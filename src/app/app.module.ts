import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './reducers/todo.reducer';
import { TodoContainerComponent } from './todo/todo-container/todo-container.component';
import { TodoUiComponent } from './todo/todo-container/todo-ui/todo-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoUiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ todoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
