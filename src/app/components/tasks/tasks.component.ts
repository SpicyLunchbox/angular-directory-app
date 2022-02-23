import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // to use a service, you have to add it as a constructor argument
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // think of this like a Promise, used for async data
    this.taskService.getTasks().subscribe((res) => (this.tasks = res));
  }
}
