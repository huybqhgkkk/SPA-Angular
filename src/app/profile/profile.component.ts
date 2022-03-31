import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {addProduct, decrement, increment, reset, setAuth} from '../test.actions';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {HttpServerService} from "../Services/http-server.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // count$: Observable<number>;
  // auth1: Observable<number>;
  // modalRef?: BsModalRef;
  // message?: string;
  datas: any;


  constructor(private store: Store<{ count: number,  auth: any}>,
              private http: HttpServerService,
              private router: Router
              ) {
    // this.count$ = store.select('count');
    // this.auth1 = store.select('auth');
  }

  ngOnInit(): void {

    if(!this.checkLogin){
      var text = "Bạn cần đăng nhập để xem đc Profile!";
      if (confirm(text) == true) {
        this.router.navigateByUrl("/login")
      } else {
        this.router.navigateByUrl("/home")
      }
    }else {
      this.http.getInfor().subscribe((data)=> {
        console.log(333, data)
        this.datas = data
      })
    }


  }

  get checkLogin(): Boolean {
    return this.http.isLogin;
  }

  // increment() {
  //   this.store.dispatch(increment());
  // }
  //
  // decrement() {
  //   this.store.dispatch(decrement());
  // }
  //
  // reset() {
  //   this.store.dispatch(reset());
  // }
  //
  // setAuth() {
  //   this.store.dispatch(setAuth())
  // }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  // }
  //
  // confirm(): void {
  //   this.message = 'Confirmed!';
  //   this.modalRef?.hide();
  // }
  //
  // decline(): void {
  //   this.message = 'Declined!';
  //   this.modalRef?.hide();
  // }




}
