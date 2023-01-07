import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoItem {
    Name: string;
    Open: boolean;
    Id: number;
  constructor(@Inject(String) Name: string, @Inject(Boolean)Open: boolean, @Inject(Number)Id: number) {
    this.Name = Name;
    this.Open = Open;
    this.Id = Id;
  }
  async Create(){
    let url = `http://localhost:3000/TodoItems?name=${this.Name}`
    let result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({name: this.Name, open: this.Open}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    console.log(typeof result, result);
    this.Id = result.id;
  }
  Update(){

  }
  Delete(){

  }
  
}