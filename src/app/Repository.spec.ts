import { TodoItem } from "./TodoItem.spec";

export class Repository {
    url = "http://localhost:3000/TodoItems";
    async FetchAllItems() : Promise<TodoItem[]>{
        let result = await fetch(this.url).then(response => response.json());
        return result.map(function(element:any){
          return new TodoItem(element.name, element.open, element.id);
        });
    }
    async CreateItem(Name: string) : Promise<TodoItem> {
        let result = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify({name: Name, open: true}),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => res.json());
        return new TodoItem(result.name, result.open, result.id);
    }
    async UpdateItem(item: TodoItem) {
        await fetch(`${this.url}/${item.Id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name: item.Name, open: item.Open})
            }
        )
    }
    async DeleteItem(item: TodoItem) {
        await fetch(`${this.url}/${item.Id}`, { method: 'DELETE' })
    }
}