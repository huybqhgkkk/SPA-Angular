import {getTestBed, TestBed} from '@angular/core/testing';

import {HttpServerService} from './http-server.service';
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Observable, of} from "rxjs";


describe('HttpServerService', () => {
  let service: HttpServerService;
  let httpClientSpy: jasmine.SpyObj<HttpServerService>;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  const response = [
    {
      id: 111,
      name: "aaaa",
      content: "aaaaaaaaaaaa111"
    },
    {
      id: 222,
      name: "aadddaa",
      content: "bbbbb"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterModule.forRoot([]),
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [HttpServerService],
    });
    service = TestBed.inject(HttpServerService);

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loginAPi() should return data', () => {
    spyOn(service, 'loginAPi').and.returnValue(of(response));
    service.loginAPi().subscribe(value => {
      expect(value).toBe(response);
    });
  });

  it('getPost() should return data', () => {
    spyOn(service, 'getPost').and.returnValue(of(response));
    service.getPost().subscribe((res) => {
      expect(res).toBe(response)
    });
  });
});
