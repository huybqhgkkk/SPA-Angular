import {Component, EventEmitter, Input, Output, Directive} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPA';
  boo = 1000;
  label = "";
  fname: any;
  isTrue: any;
  isMetric= "true";


  updateTime() {
    this.boo--;
  }

  updateValue(value: any){
    this.label = value;
  }

  navigate(url : string) {
    // this.routerService.navigate([url]);
    this.routerService.navigateByUrl(url);
  }

constructor(  public routerService : Router) {
}


}

