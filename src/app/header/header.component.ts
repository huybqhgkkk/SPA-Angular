import {Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {setAuth} from "../test.actions";
import {HttpServerService} from "../Services/http-server.service";
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  check = "";
  // isLogin: Observable<boolean>;
  // @Input()
  // isLogin: boolean ;
  modalRef?: BsModalRef;

  constructor(private router: Router,
              private store: Store<{ auth: any }>,
              private http: HttpServerService,
              private modalService: BsModalService
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((url: any) => this.check = url.url);
  }

  get product(): Boolean {
    return this.http.isLogin;
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.isLogin&& changes.isLogin.currentValue != changes.isLogin.previousValue) {
      console.log(666, "vao changeas")
    }
  }

  //mo modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  decline(): void {
    this.modalRef?.hide();
  }

  confirm(): void {
    this.http.isLogin = false;
    localStorage.removeItem('token')
    this.router.navigateByUrl("/home")
    this.modalRef?.hide();
  }

}
