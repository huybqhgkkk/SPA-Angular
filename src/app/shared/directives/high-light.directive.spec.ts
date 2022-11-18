import { HighLightDirective } from './high-light.directive';
import {HomeComponent} from "../../component/home/home.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";

describe('HighLightDirective', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterModule.forRoot([]),
        HttpClientModule,
        TranslateModule.forRoot()
      ],
      declarations: [ HomeComponent, HighLightDirective ],
      // providers: [provideMockStore({})],
    })
      .createComponent(HomeComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should have blue <h1>', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    const bgColor = h1.style.color;
    expect(bgColor).toBe('rgb(211, 211, 211)');
  });
});
