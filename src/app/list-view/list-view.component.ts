import { Component } from '@angular/core';
import { TodoItem } from '../TodoItem.spec';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  TodoItems: TodoItem[];
  OpenItems: boolean;
  constructor (@Inject(TodoItem) TodoItems: TodoItem[], @Inject(Boolean) OpenItems: boolean){
    this.TodoItems = TodoItems;
    this.OpenItems = OpenItems;
  }
}
