import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

	todo:string[];
	errMessage:string;

	constructor() { }

	ngOnInit() {
		this.todo = ["Go grocery shopping", "Do homework", "Call mom"];
	}

	addToDo(todoitem) {
		if (todoitem.value.length) {
			this.todo.unshift(todoitem.value);
			this.errMessage = '';
			todoitem.value = '';
		} else {
			this.errMessage = "Please type something!";
		}
		return false;
	}

	deleteToDo(item) {
		for (let i = 0, len = this.todo.length; i < len; i++) {
			if (this.todo[i] == item) {
				this.todo.splice(i, 1);
			}
		}
	}

}


