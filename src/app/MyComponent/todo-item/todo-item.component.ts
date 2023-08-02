import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckox: EventEmitter<Todo> = new EventEmitter();


  constructor() {}
              
  onClick() {
    console.log("on click has been triggered");
    this.todoDelete.emit(this.todo);
  }

  todoCheckboxClick() {
    // Toggle the 'active' property of the todo item when the checkbox is clicked
    // this.todo.active = !this.todo.active;
    // console.log("Checkbox clicked:", this.todo);
    this.todoCheckox.emit(this.todo);
    console.log(this.todo);
  }

}
