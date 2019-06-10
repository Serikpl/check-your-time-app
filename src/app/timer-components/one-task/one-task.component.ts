import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Task } from 'src/app/models/task.model';

@Component({
	selector: 'one-task',
	templateUrl: './one-task.component.html'
})
export class OneTaskComponent implements OnInit, OnDestroy
{
	interval:any = null;
	@Input('task') task: Task = null;

	ngOnInit() {
		this.startTask();
	}

	ngOnDestroy(){
		this.stopInterval();
	}

	startCountDuration(){
		this.stopInterval();
		this.interval = setInterval(() => this.task.duration++, 1000);
	}

	stopInterval() {
		clearInterval(this.interval);
	}

	startTask(){
		this.task.is_active = true;
		this.startCountDuration();
	}

	stopTask() {
		this.task.is_active = false;
		this.stopInterval();
	}

}