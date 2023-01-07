import { Component, ViewChild } from '@angular/core';
import { TodoItem } from '../TodoItem.spec';
import { ListViewComponent } from '../list-view/list-view.component';
import { Inject } from '@angular/core';



@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent {
  @ViewChild('input') input: any;
  url = "http://localhost:3000/TodoItems";
  filterargs = { open : true };
  items: TodoItem[] = [];
  constructor (){
    this.inialise();
  }
  async inialise() {
    let result = await fetch(this.url).then(response => response.json());
    this.items = result.map(function(element:any){
      return new TodoItem(element.name, element.open, element.id);
    });
    console.log("items", this.items);
    this.items.forEach(function(element: any) {
      console.log(element);
    });

  }
  async createItem(value:string) {
    let newItem = new TodoItem (value, true , 0)
    await newItem.Create();
    this.items.push(newItem);
    this.input.nativeElement.value = '';
  }
}
