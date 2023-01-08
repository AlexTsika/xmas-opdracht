import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Repository } from './Repository.spec';

@Injectable({
  providedIn: 'root'
})
// To Do Item
export class TodoItem {
    Name: string;
    Open: boolean;
    Id: number;
  constructor(@Inject(String) Name: string, @Inject(Boolean)Open: boolean, @Inject(Number)Id: number) {
    this.Name = Name;
    this.Open = Open;
    this.Id = Id;
  }
  // edit
  Update(@Inject(Boolean)Open: boolean, repository: Repository){
    this.Open = Open;
    repository.UpdateItem(this);
  }
  // delete
  Delete(repository: Repository){
    repository.DeleteItem(this);
  }
  
}