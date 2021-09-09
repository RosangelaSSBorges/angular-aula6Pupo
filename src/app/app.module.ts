import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TimerService } from './timer.service';
import { TasksService } from './tasks.service';
import { TasksComponent } from './tasks/tasks.component';
import { LoggerService } from './logger.service';
import { LogComponent } from './log/log.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'log', component: LogComponent }
    ])
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent, TasksComponent, LogComponent],
  bootstrap: [AppComponent],
  providers: [TimerService, TasksService, LoggerService]
})
export class AppModule {}