import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {HttpServerService} from "../../Services/http-server.service";
import {defaultThrottleConfig} from "rxjs/internal-compatibility";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = "huykkk";
  age = 11;
  myColor = "blue"
  // count$: Observable<number>;
  // auth: any;
  vote: number = 0;
  dataList = [
    {
      name: "tao",
      gia: 3000,
      sale: true
    },
    {
      name: "nho",
      gia: -1000,
      sale: true
    },
    {
      name: "cam",
      gia: 3535,
      sale: false
    }
  ]
  vnData: any = null;
  district: any = null;
  ward: any = null;
  dataInput = {
    tinh: "",
    huyen: "",
    xa: "",
  }


  VnForm = new FormGroup({
    province: new FormControl('', []),
    district: new FormControl('', []),
    ward: new FormControl('', []),
  });


  constructor(private store: Store<{ count: number, auth: any }>,
              public routerService: Router,
              private http: HttpServerService,
              private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.http.getProvince().subscribe((data) => {
      this.vnData = data;
    })
  }

  navigate(url: string) {
    this.routerService.navigateByUrl(url);
  }

  get isLogin(): Boolean {
    return this.http.isLogin;
  }

  voteCount(value: number) {
    this.vote = value;
  }

  //xu li chon tinh
  handleProvince(e: any): void {
    this.dataInput.xa = "";
    this.dataInput.huyen = "";
    this.ward = null;
    this.http.getDistrict(parseInt(e)).subscribe((data) => {
      this.district = data?.districts;
      // console.log(222,data?.districts[parseInt(e.target.value)])
      // this.dataInput.huyen = this.district[parseInt(e.target.value)]?.name
    })
  }

  //xu li chon huyen
  handleDistrict(e: any): void {
    this.dataInput.xa = "";
    this.http.getWard(parseInt(e)).subscribe((data) => {
      this.ward = data?.wards
      // console.log(333,data?.wards[parseInt(e.target.value)])
      // this.dataInput.xa = this.ward[parseInt(e.target.value)]?.name
    })
  }

  //xu li xa
  handleWard(e: any): void {
    // this.dataInput.xa = this.ward[parseInt(e.target.value)]?.name
  }

  // submit form vn
  confirm(): void {
    console.log(555, this.VnForm.value)
  }
}
