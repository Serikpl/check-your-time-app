import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerPanelComponent } from './timer-components/timer-panel/timer-panel.component';
import { TimerFormComponent } from './timer-components/timer-form/timer-form.component';
import { TaskListComponent } from './timer-components/task-list/task-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';
import { OneTaskComponent } from './timer-components/one-task/one-task.component';
import { DurationPipe } from './pipes/duration.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
		AppComponent,
		TimerPanelComponent,
		TimerFormComponent,
		TaskListComponent,
		OneTaskComponent,
		DurationPipe
  ],
  imports: [
		BrowserModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule, 
		MatCheckboxModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
