import {Component, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {HttpServerService} from "../../Services/http-server.service";
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  check = "";
  modalRef?: BsModalRef;

  constructor(private router: Router,
              private store: Store<{ auth: any }>,
              private http: HttpServerService,
              private modalService: BsModalService,
              public translate: TranslateService
  ) {
    translate.addLangs(['en', 'vn']);
    translate.setDefaultLang('en');
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

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
