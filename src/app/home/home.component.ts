import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {HttpServerService} from "../Services/http-server.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = "huykkk";
  age = 11;
  // count$: Observable<number>;
  // auth: any;


  constructor(private store: Store<{ count: number , auth: any}>,
              public routerService : Router,
              private http : HttpServerService
  ) {
    // this.count$ = store.select('count');
    // this.auth = store.select('auth')
    //  this.login = this.http.isLogin;
  }

  ngOnInit(): void {
  }

  navigate(url : string) {
    // this.routerService.navigate([url]);
    this.routerService.navigateByUrl(url);
  }

  get isLogin(): Boolean {
    return this.http.isLogin;
  }

}
