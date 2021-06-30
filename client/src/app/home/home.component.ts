import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //If we don't declare a type, typescript will infer the type based on the value we give the variable
  registerMode = false;
  // users: any;

  constructor() { }

  ngOnInit(): void {
    // this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  // getUsers() {
  //   this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users);
  // }

  cancelRegisterMode(event: boolean) { 
    this.registerMode = event;
  }
}
