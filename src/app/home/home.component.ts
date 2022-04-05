import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {HttpServerService} from "../Services/http-server.service";
import {defaultThrottleConfig} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = "huykkk";
  age = 11;
  myColor = "red"
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
  vnData :any = null ;
  district:any = null;
  ward:any = null;
  dataInput = {
    tinh: "1",
    huyen:"2",
    xa: "3",
  }
  selectedValue = null;
  showP :boolean = false;
  showD :boolean = false;
  showW :boolean = false;
  selectP: any;
  selectD: any;
  selectW: any;




  constructor(private store: Store<{ count: number , auth: any}>,
              public routerService : Router,
              private http : HttpServerService
  ) {
    // this.count$ = store.select('count');
    // this.auth = store.select('auth')
    //  this.login = this.http.isLogin;
  }

  ngOnInit() :void{
     this.http.getProvince().subscribe((data)=> {
      this.vnData = data;
    })
  }

  navigate(url : string) {
    // this.routerService.navigate([url]);
    this.routerService.navigateByUrl(url);
  }

  get isLogin(): Boolean {
    return this.http.isLogin;
  }

  voteCount(value:number) {
    this.vote = value;
  }
  //xu li chon tinh
  handleProvince(e:any):void {
    console.log(555,)
    this.selectP = parseInt(e.target.value);
   this.ward = null;
    this.http.getDistrict(parseInt(e.target.value)).subscribe((data)=>{
      this.district = data?.districts;
      // console.log(222,data?.districts[parseInt(e.target.value)])
      // this.dataInput.huyen = this.district[parseInt(e.target.value)]?.name
    })
  }
  //xu li chon huyen
  handleDistrict(e:any):void {

    this.http.getWard(parseInt(e.target.value)).subscribe((data)=>{
      this.ward = data?.wards
      // console.log(333,data?.wards[parseInt(e.target.value)])
      // this.dataInput.xa = this.ward[parseInt(e.target.value)]?.name
    })
  }
  //xu li xa
  handleWard(e:any):void {
    // this.dataInput.xa = this.ward[parseInt(e.target.value)]?.name
  }

  handleSubmit():void {

  }

  //xu li show
  handleShowP():void {
    console.log(666)
    this.showP = true;
  }
  handleShowD():void {
    this.showD = true;
  }
  handleShowW():void {
    this.showW = true;
  }
}
