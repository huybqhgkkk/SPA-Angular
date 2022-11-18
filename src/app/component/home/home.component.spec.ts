import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import {Renderer2, RendererFactory2} from "@angular/core";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({}),
          RouterModule.forRoot([]),
          HttpClientModule,
          TranslateModule.forRoot(),
        ],
        declarations: [ HomeComponent ],
        // providers: [Renderer2, RendererFactory2 ],
    },
      ).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "the life is good"', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('.content').textContent;
    expect(title).toBe(' the life is good ');
  });

  it('should aaa', () => {
    component.name = "123";
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('span').textContent;
    expect(title).toBe('123');
  });
});
