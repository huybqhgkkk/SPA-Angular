import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public id : number = 0;


  constructor( public activatedRoute : ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }


  backClicked() {
    this._location.back();
  }

}
