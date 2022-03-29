import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private GET_API_SPA = "https://jsonplaceholder.typicode.com/posts"
  private GET_API = "https://6183570f91d76c00172d18d5.mockapi.io/api/test/v1/post"
  private httpOptions = {
    headers: new HttpHeaders(
      {
        "Content-Type": "application/json",
        // Authoriration : "token"
      }
    )
  }
  constructor(private httpClient: HttpClient) { }

  public getPost():Observable<any>{
    const url = this.GET_API;
    return this.httpClient.get<any>(url, this.httpOptions)
  }

  public PostApi(payload:any):Observable<any>{
    const url = this.GET_API;
    return this.httpClient.post<any>(url, payload, this.httpOptions)
  }

}
