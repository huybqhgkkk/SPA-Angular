import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private GET_API_SPA = "https://jsonplaceholder.typicode.com/posts"
  private GET_API = "https://6183570f91d76c00172d18d5.mockapi.io/api/test/v1/post"
  private LOGIN_APi = "https://60dff0ba6b689e001788c858.mockapi.io/tokens"
  private httpOptions = {
    headers: new HttpHeaders(
      {
        "Content-Type": "application/json",
        // Authoriration : "token"
      }
    )
  }
  constructor(private httpClient: HttpClient) { }
//lay data
  public getPost():Observable<any>{
    const url = this.GET_API;
    return this.httpClient.get<any>(url, this.httpOptions)
  }
//them ban ghi
  public PostApi(payload:any):Observable<any>{
    const url = this.GET_API;
    return this.httpClient.post<any>(url, payload, this.httpOptions)
  }
//fake login
  public loginAPi():Observable<any>{
    const url = this.LOGIN_APi;
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  // lay chi tiet ban ghi
  public getPostDetail(data: any):Observable<any>{
    const url = `${this.GET_API}/${data}`;
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  // sua ban ghi
  public editPost(data: any):Observable<any>{
    const url = `${this.GET_API}/${data}`;
    return this.httpClient.put<any>(url, this.httpOptions)
  }
  //xoa ban ghi
  public deletePost(data: any):Observable<any>{
    const url = `${this.GET_API}/${data}`;
    return this.httpClient.delete<any>(url, this.httpOptions)
  }

}
