import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUiComponent } from './todo-ui.component';

describe('TodoUiComponent', () => {
  let component: TodoUiComponent;
  let fixture: ComponentFixture<TodoUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
