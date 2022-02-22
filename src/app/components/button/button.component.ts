import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // @Input() allows you to accept inputs to the component, props essentially
  @Input() text!: string;
  @Input() color!: string;
  // @Output() allows you to output things from the component, emits essentially
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  // emits btnClick event to parent component
  onClick() {
    this.btnClick.emit();
  }

}
