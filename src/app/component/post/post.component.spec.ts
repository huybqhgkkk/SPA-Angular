import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpServerService} from "../../Services/http-server.service";

// describe('PostComponent', () => {
//   let component: PostComponent;
//   let fixture: ComponentFixture<PostComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         StoreModule.forRoot({}),
//         RouterModule.forRoot([]),
//         HttpClientModule,
//         TranslateModule.forRoot(),
//       ],
//       declarations: [ PostComponent ],
//       providers: [HttpServerService]
//     })
//     .compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(PostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
