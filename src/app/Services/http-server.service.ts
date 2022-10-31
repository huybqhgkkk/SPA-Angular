import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../entity/User";

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private GET_API_SPA = "https://jsonplaceholder.typicode.com/posts"
  private GET_API = "https://6183570f91d76c00172d18d5.mockapi.io/api/test/v1/post"
  private USER_API = "https://6183570f91d76c00172d18d5.mockapi.io/api/test/v1/user/1"
  private LOGIN_APi = "https://60dff0ba6b689e001788c858.mockapi.io/tokens"
  public isLogin: boolean = false;
  private GET_VN = "https://provinces.open-api.vn/api"

  private httpOptions = {
    headers: new HttpHeaders(
      {
        "Content-Type": "application/json",
        // Authoriration : "token"
        allowedHeaders: [
          'Content-Type',
          'Authorization',
          'Origin',
          'x-access-token',
          'XSRF-TOKEN'
        ],
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        "Cache-Control": "no-cache",
      }
    )
  }
  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem("token")){
      this.isLogin = true
    }
  }
  //kiem tra login
  // public checkLogin(check: boolean):Observable<boolean>{
  //    this.isLogin = check;
  // }

//lay data
  public getPost():Observable<IUser[]>{
    const url = this.GET_API;
    return this.httpClient.get<IUser[]>(url, this.httpOptions)
  }
//them ban ghi
  public PostApi(payload:IUser):Observable<IUser>{
    const url = this.GET_API;
    return this.httpClient.post<IUser>(url, payload, this.httpOptions)
  }
//fake login
  public loginAPi():Observable<any>{
    const url = this.LOGIN_APi;
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  // lay chi tiet ban ghi
  public getPostDetail(data: number):Observable<IUser>{
    const url = `${this.GET_API}/${data}`;
    return this.httpClient.get<IUser>(url, this.httpOptions)
  }
  // sua ban ghi
  public editPost(id: number, payload: IUser):Observable<IUser>{
    const url = `${this.GET_API}/${id}`;
    return this.httpClient.put<IUser>(url, payload ,this.httpOptions)
  }
  //xoa ban ghi
  public deletePost(data: number):Observable<number>{
    const url = `${this.GET_API}/${data}`;
    return this.httpClient.delete<number>(url, this.httpOptions)
  }
  //thong tin user
  public getInfor():Observable<IUser>{
    const url = this.USER_API;
    return this.httpClient.get<IUser>(url, this.httpOptions)
  }
  //lay list tinh thanh
  public getProvince():Observable<any>{
    const url = `${this.GET_VN}/p`;
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  //lay huyen tu tinh
  public getDistrict(code: number):Observable<any>{
    const url = `${this.GET_VN}/p/${code}?depth=2`;
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  //lay xa tu huyen
  public getWard(code: number):Observable<any>{
    const url = `${this.GET_VN}/d/${code}?depth=2`;
    return this.httpClient.get<any>(url, this.httpOptions)
  }

}
