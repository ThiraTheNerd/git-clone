import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpService } from '../services/http.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user : User;

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.request().subscribe((response)=> {
      this.user = new User(response.login, response.avatar_url, response.url,response.public_repos,response.followers, response.following)
    })
  }

}
