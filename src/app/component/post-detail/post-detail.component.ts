import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common'
import {HttpServerService} from "../../Services/http-server.service";
import {async} from "rxjs";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnChanges {
  detail: any;
  public id: number = 0;


  constructor(public activatedRoute: ActivatedRoute,
              private _location: Location,
              private http: HttpServerService
  ) {
    //   this.http.getPostDetail(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
    //   console.log(555,data)
    //   this.detail = data
    // })
  }

  ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }

  ngOnInit (): void {
    // this.id = this.activatedRoute.snapshot.params['id'];
    this.http.getPostDetail(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.detail = data
    })
  }




  backClicked() {
    this._location.back();
  }

}
