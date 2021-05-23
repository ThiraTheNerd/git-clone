import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpService } from '../services/http.service';
import { User } from '../models/user.model';
import { Repositories } from '../models/repositories';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user : User;
  repository: Repositories
  repositories: Repositories[]=[]
  query: string;
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.request("users").subscribe((response)=> {
      this.user = new User(response.login, response.avatar_url, response.url,response.public_repos,response.followers, response.following)
    })
    this.getRepos()
  }
  getRepos(){
    return this._http.request("users","/repos").subscribe((response)=>{
      // console.log(response)
      response.forEach(repo => {
        // eliminating unncessary data
        // if("languages_url" in repo){
        //   this._http.request("repos",`/${repo.name}/languages`).subscribe((response)=>{
        //     item.languages_url=(response)
        //   })
        // }
        let item= new Repositories(repo.name, repo.description, repo.languages_url)
        this.repositories.push(item)
      });
      // console.log(this.repositories)
    })
  }
  search(){
    this._http.search(this.query).subscribe((response)=>{
      // console.log(response)
      response.forEach(repo => {
        // eliminating unncessary data
        // if("languages_url" in repo){
        //   this._http.request("repos",`/${repo.name}/languages`).subscribe((response)=>{
        //     item.languages_url=(response)
        //   })
        // }
        let item= new Repositories(repo.name, repo.description, repo.languages_url)
        this.repositories.push(item)
      });
      // console.log(this.repositories)
    })
  }
}
