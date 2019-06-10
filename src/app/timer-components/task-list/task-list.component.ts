import { Component, OnInit } from "@angular/core";
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
	selector: 'task-list',
	templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit
{
	tasks: Task[] = [];

	constructor(
		public tasksService: TasksService
	)
	{}

	ngOnInit() {
		this.tasks = this.tasksService.getTasks();
	}
}