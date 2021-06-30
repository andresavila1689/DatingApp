import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any; //Using the any in the property, we're basically turning off type safety for the variable.

  constructor(private accountService: AccountService){

  }
  
  ngOnInit() {
    // this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage) {
      const user: User = JSON.parse(userLocalStorage);
      this.accountService.setCurrentUser(user);
    }
  }

  // getUsers() {    
  //   //We use the this keyword when we need to access properties inside the class
  //   this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //     this.users = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
