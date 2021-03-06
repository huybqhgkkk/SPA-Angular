import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon'
import { NzTableModule } from 'ng-zorro-antd/table';
import {NZ_ICONS} from "ng-zorro-antd/icon";
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { StoreModule } from '@ngrx/store';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap/modal';

import { counterReducer,testLogin } from './test.reducer';
import { ProductComponent } from './product/product.component';
import { OnsalePipe } from './pipe/onsale.pipe';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { HighLightDirective } from './Directives/high-light.directive';
import { NotifierModule } from 'angular-notifier';
import { NgSelectModule } from '@ng-select/ng-select';



const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PostComponent,
    ProfileComponent,
    LoginComponent,
    PostDetailComponent,
    ProductComponent,
    OnsalePipe,
    HighLightDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule,
      NgxDatatableModule,
      ReactiveFormsModule,
      NzButtonModule,
      NzTableModule,
      NzIconModule,
      NzInputModule,
      NzSelectModule,
      NotifierModule,
      NgSelectModule,
      // ModalModule.forRoot(),
      StoreModule.forRoot({ count: counterReducer, auth: testLogin}),
      TooltipModule.forRoot(),
      Ng2SearchPipeModule,
      ModalModule.forRoot()

    ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
