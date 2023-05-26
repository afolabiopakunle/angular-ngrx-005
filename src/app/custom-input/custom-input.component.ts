import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  customCount = 1;
  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.customCount);
  }
}