import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any; //Using the any in the property, we're basically turning off type safety for the variable.

  constructor(private http: HttpClient){

  }
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){    
    //We use the this keyword when we need to access properties inside the class
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
