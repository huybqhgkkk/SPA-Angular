import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterModule.forRoot([]),
        HttpClientModule,
        TranslateModule.forRoot(),
      ],
      declarations: [ NotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
