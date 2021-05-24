import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from "../models/api_response.model";
// import { ACCESS_KEY } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  request(user:string, location:string,arg:string="") :Observable<any>{
    return this._http.get<ApiResponse>(`https://api.github.com/${location}/${user}${arg}`, {
    })
  }
  search(search:string="") :Observable<any>{
    return this._http.get<ApiResponse>(`https://api.github.com/users/${search}/repos`, )
  }
}
