import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import * as moment from 'moment';

@Injectable()
export class TasksService
{
	tasks: Task[] = [];

	getTasks(): Task[] {
		return this.tasks;
	}

	addTask(task: Task): void {
		task = this.generateInitialData(task);
		this.tasks.push(task);
	}

	generateInitialData(task: Task): Task {
		task.task_id = this.getIndex();
		task.created_date = moment().format('DD/MM/YYYY HH:mm:ss');
		task.duration = 0;
		task.is_active = true;
		return task;
	}

	// #region algorithm GENERATING UNIQUE indexes
	getIndex(): number {
		let generateIndex = () => Math.random() * Math.pow(10, 17);;
		let newIndex: number = null;

		while(!newIndex){
			newIndex = generateIndex();
			if(!this.checkIfIndexExist(newIndex))	newIndex = null;
		}

		return newIndex;
	}

	checkIfIndexExist(_index: number){
		return !this.tasks.some((t: Task) => t.task_id === _index);
	}
	// #endregoin unique indexes
}