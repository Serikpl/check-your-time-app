import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
	selector: 'timer-form',
	templateUrl: './timer-form.component.html'
})
export class TimerFormComponent implements OnInit {

	taskForm: FormGroup;

	constructor(
		public fb: FormBuilder,
		public tasksService: TasksService	
	)
	{}

	ngOnInit() {
		this.initForm();
	}

	initForm() {
		this.taskForm = this.fb.group({
			name: ['', [
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(255)
			]],
			description: [null, [
				Validators.minLength(2)
			]]
		});
	}

	submitFormHandler() {
		for (let c in this.taskForm.controls) {
      this.taskForm.controls[c].markAsTouched();
		}
		
		if(this.taskForm.valid) {
			const newTask = new Task(this.taskForm.value);
			this.tasksService.addTask(newTask);
			this.taskForm.reset();
			console.log(this.tasksService.tasks);
		}
	}

	ifShowError(controlName: string, validationType: string) {
    return this.taskForm.controls[controlName].hasError(validationType)
      && (this.taskForm.controls[controlName].dirty || this.taskForm.controls[controlName].touched);
  }
}