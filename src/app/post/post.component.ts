import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpServerService} from "../Services/http-server.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public id : number = 0;
  datas: any ;

  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: 'id' }, { name: 'name' }, { name: 'content', sortable: false }];

  constructor( public activatedRoute : ActivatedRoute, private httpServerService: HttpServerService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.httpServerService.getPost().subscribe((data)=>{
      this.datas = data;
    })


  }
  handleDetail(e:any) {
    console.log(333,e)
  }

  test() {
    const pay = {
      "name": "name 1111",
      "content": "moi them vao nha ppp",
    }

    this.httpServerService.PostApi(pay).subscribe((data)=>{
      console.log(222,data)
    })
  }

}
