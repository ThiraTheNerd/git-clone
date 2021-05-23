import { Component, OnInit } from '@angular/core';
import { Repositories } from '../models/repositories';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repository: Repositories
  repositories: Repositories[]=[]
  constructor(private _http : HttpService) { }


  ngOnInit() {
    this.getRepos()
  }
  
  getRepos(){
    return this._http.request("ThiraTheNerd","users","/repos").subscribe((response)=>{
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
