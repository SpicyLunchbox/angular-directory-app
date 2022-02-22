import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  constructor() { }

  // lifecycle method that will run when the component loads
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('toggle')
  }
}
