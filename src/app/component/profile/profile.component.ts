import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {addProduct, decrement, increment, reset, setAuth} from '../../test.actions';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {HttpServerService} from "../../Services/http-server.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
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
    if (this.checkLogin) {
      this.http.getInfor().subscribe((data)=> {
        this.datas = data
      })
    }
  }

  handleLogin():void {
    this.router.navigateByUrl("/login");
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

  //mo modal
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  // }
  //
  // decline(): void {
  //   this.modalRef?.hide();
  // }
  //
  // confirm(): void {
  //   this.http.isLogin = false;
  //   localStorage.removeItem('token')
  //   this.router.navigateByUrl("/home")
  //   this.modalRef?.hide();
  // }




}
