import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";


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
  isMetric = "true";


  updateTime() {
    this.boo--;
  }

  updateValue(value: any) {
    this.label = value;
  }

  navigate(url: string) {
    this.routerService.navigateByUrl(url);
  }

  constructor(
    public routerService: Router,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'vn']);
    translate.setDefaultLang('en');
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }


}

