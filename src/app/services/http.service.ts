import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from "../models/api_response.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  request() :Observable<any>{
    return this._http.get<ApiResponse>("https://api.github.com/users/ThiraTheNerd")
  }
  
}
