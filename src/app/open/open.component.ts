import { Component, ViewChild } from '@angular/core';
import { TodoItem } from '../TodoItem.spec';
import { Repository } from '../Repository.spec';
@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent {
  @ViewChild('input') input: any;
  repository: Repository = new Repository()
  url = "http://localhost:3000/TodoItems";
  filterargs = { open : true };
  items: TodoItem[] = [];
  constructor (){
    this.inialise();
  }
  async inialise() {
    this.items = await this.repository.FetchAllItems();

  }
  // create item
  async createItem(value:string) {
    if(!value || !value.trim()){
      return
   }

   this.items.push(await this.repository.CreateItem(value));
   this.input.nativeElement.value = '';
  }
  // mark item done
  async markItemDone(id:number){
    let thisItem = this.items.filter(item => item.Id === id)[0];
    thisItem.Update(false, this.repository);
  }
  // delete item
  async removeItem(id:number){
    let thisItem = this.items.filter(item => item.Id === id)[0];
    thisItem.Delete(this.repository);

    this.items = this.items.filter(item => item.Id != id);
  }
}
