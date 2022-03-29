import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = "huykkk";


  navigate(url : string) {
    // this.routerService.navigate([url]);
    this.routerService.navigateByUrl(url);
  }

  constructor(  public routerService : Router) {
  }

  ngOnInit(): void {
  }

}
