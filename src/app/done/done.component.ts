import { Component } from '@angular/core';
import { Repository } from '../Repository.spec';
import { TodoItem } from '../TodoItem.spec';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {
  repository: Repository = new Repository()
  filterargs = { open : true };
  items: TodoItem[] = [];


  constructor (){
    this.inialise();
  }
  async inialise() {
    this.items = await this.repository.FetchAllItems();

  }
  // set item to open
  async markItemOpen(id:number){
    let thisItem = this.items.filter(item => item.Id === id)[0];
    thisItem.Update(true, this.repository);
  }
  // delete item
  async removeItem(id:number){
    let thisItem = this.items.filter(item => item.Id === id)[0];
    thisItem.Delete(this.repository);
    this.items = this.items.filter(item => item.Id != id);
  }
}
