import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TestCompComponent } from '../test-comp/test-comp.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TestCompComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'test',
        component: TestCompComponent
      }
    ])
  ]
})
export class TodoListModule { }
