import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
// importing the icon from the fortawesome module here
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  // our import is "registered" here
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
