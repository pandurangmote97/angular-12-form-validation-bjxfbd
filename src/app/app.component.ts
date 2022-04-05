import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { User } from './utils/validation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: User;
  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {}
}
