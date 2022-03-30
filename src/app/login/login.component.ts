import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpServerService} from "../Services/http-server.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data:any;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit() {
    console.log(444,this.loginForm.value);
    this.httpServerService.loginAPi().subscribe((data)=>{
      console.log(555,data)
      if (data) {
        localStorage.setItem("token", data.token)

      }
    })
  }

  constructor(
    private httpServerService: HttpServerService
  ) { }

  ngOnInit(): void {
  }

}
