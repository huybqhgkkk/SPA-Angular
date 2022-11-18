import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";
import {HttpServerService} from "../../Services/http-server.service";

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         StoreModule.forRoot({}),
//         RouterModule.forRoot([]),
//         HttpClientModule,
//         TranslateModule.forRoot(),
//       ],
//       declarations: [ HeaderComponent ],
//       providers: [HttpServerService]
//     })
//     .compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
