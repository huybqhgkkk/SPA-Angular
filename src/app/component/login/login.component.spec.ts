import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {HttpServerService} from "../../Services/http-server.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: HttpServerService;
  let el: HTMLElement;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterModule.forRoot([]),
        HttpClientModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [LoginComponent],
      providers: [HttpServerService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HttpServerService);
    fixture.detectChanges();
  });

  it('should create LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should change data when input email change', async () => {
    let el: DebugElement = fixture.debugElement.query(By.css('#email'));
    el.nativeElement.value = 'test Data';
    el.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.loginForm.value['email']).toBe('test Data');
    });
  })

  it('should change data when input password change', async () => {
    let el: DebugElement = fixture.debugElement.query(By.css('#password'));
    el.nativeElement.value = 'test Data';
    el.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.loginForm.value['password']).toBe('test Data');
    });
  })

  it('should call through ngOninit', async () => {
    fixture.detectChanges();
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  })

  it('should call through onSubmit', async () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  })

  it('should set isLogin true when valid form', async () => {
    component.loginForm.setValue({
      email: 'huy123@mail.com',
      password: '1234567899'
    });
    component.onSubmit();
    fixture.detectChanges();
    expect(service.isLogin).toBeTruthy();
  })

  it('should be invalid form', async () => {
    component.loginForm.setValue({
      email: '',
      password: ''
    });
    expect(component.loginForm.valid).toBeFalsy();
  })

  it('should be valid form', async () => {
    component.loginForm.setValue({
      email: 'huy123@gmail.com',
      password: '1234567338'
    });
    expect(component.loginForm.valid).toBeTruthy();
  })
});
