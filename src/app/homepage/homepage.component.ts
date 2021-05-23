import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../user";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user : User;

  constructor(private http:HttpClient) { }

  ngOnInit() {

    interface ApiResponse{
      login: string, 
      avatar_url: string, 
      url: string, 
      public_repos:number
    }

    this.http.get<ApiResponse>("https://api.github.com/users/ThiraTheNerd").subscribe(data=>{
      //Successful API request
      this.user = new User(data.login, data.avatar_url, data.url, data.public_repos)
    })
  }

}
