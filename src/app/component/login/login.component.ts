import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpServerService} from "../../Services/http-server.service";
import {Store} from "@ngrx/store";
import {setAuth} from "../../test.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private httpServerService: HttpServerService,
    private store: Store<{ auth: any }>,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(444,this.loginForm.value);
    this.httpServerService.loginAPi().subscribe((data) => {
      // console.log(555,data)
      if (data) {
        localStorage.setItem("token", data.token)
        // this.store.dispatch(setAuth())
        this.httpServerService.isLogin = true;
        this.router.navigateByUrl(`/home`);
      }
    })
  }


}
