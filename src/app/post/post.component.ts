import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpServerService} from "../Services/http-server.service";
import {Observable} from "rxjs";
import {NzI18nService} from "ng-zorro-antd/i18n";
import {getISOWeek} from 'date-fns';
import {NzTableSortersComponent} from "ng-zorro-antd/table";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public id : number = 0;
  datas: any ;
  dataDisplay: any ;

  loadingIndicator = true;
  reorderable = true;
  loading = false;
  searchValue = '';
  visible = false;

  columns = [{ prop: 'id' }, { name: 'name' }, { name: 'content', sortable: false }, {name : "action"}];
  listOfColumn = [
    {
      title: '#',
    },
    {
      title: 'NAME',
    },
    {
      title: 'CONTENT',
    },
    {
      title: 'ACTION',
    }
  ]



  constructor( public activatedRoute : ActivatedRoute,
               private httpServerService: HttpServerService,
               private i18n: NzI18nService,
               private router: Router
  ) {
    // if (this.searchValue !=""){
    //   this.dataDisplay = this.datas.filter((item: any) => item.name.indexOf(this.searchValue) !== -1;
    // }
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.httpServerService.getPost().subscribe((data)=>{
      this.datas = data;
    })
  }
  sortFn = (a: any, b: any) => a.name.localeCompare(b.name);

  handleDetail(e:any) {
    this.router.navigateByUrl(`/post-detail/${e}`);
  }

  handleEdit (e:any) {
    console.log(111,e)
  }

  handleDelete (e:any) {
    var text = "ban co muon xoa ban ghi";

    if (confirm(text) == true) {
      this.httpServerService.deletePost(e).subscribe((aa)=>{
        this.httpServerService.getPost().subscribe((data)=>{
          this.datas = data;
        })
      })
    } else {
      text = "You canceled!";
    }

  }

  handleSearch (){
    // console.log(666,e)
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

  date = null;
  dateRange = [];
  isEnglish = false;
  listOfDisplayData = [];



  reset(): void {
    this.searchValue = '';
    // this.search();
  }

  search(): void {
    // this.visible = false;
    // this.listOfDisplayData = this.datas.filter((item: any) => item.cName.indexOf(this.searchValue) !== -1);
  }





  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }




}
