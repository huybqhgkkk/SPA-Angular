import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {setAuth} from "../test.actions";
import {HttpServerService} from "../Services/http-server.service";

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

  constructor(private router: Router,
              private store: Store<{ auth: any }>,
              private http: HttpServerService,
  ) {
    // this.isLogin = store.select('auth');
    // this.isLogin = http.isLogin;
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

  handleLogout() {
    // this.store.dispatch(setAuth())
    var text = "bạn muốn đăng xuất";
    if (confirm(text) == true) {
      this.http.isLogin = false;
      localStorage.removeItem('token')
      this.router.navigateByUrl("/home")
    } else {
      // this.router.navigateByUrl("/home")
    }



  }

}
