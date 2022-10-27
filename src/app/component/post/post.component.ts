import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpServerService} from "../../Services/http-server.service";
import {Observable} from "rxjs";
import {NzI18nService} from "ng-zorro-antd/i18n";
import {getISOWeek} from 'date-fns';
import {NzTableSortersComponent} from "ng-zorro-antd/table";

import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../entity/User";
import {NotifierService} from 'angular-notifier';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  id: number = 0;
  datas: any;
  dataDisplay: IUser[] = [];
  searchText: string = "";
  loadingIndicator = true;
  reorderable = true;
  loading = false;
  visible = false;
  modalRef?: BsModalRef;
  message?: string;
  dis: boolean = true;
  idDelete: number = 0;
  private readonly notifier: NotifierService;

  columns = [{prop: 'id'}, {name: 'name'}, {name: 'content', sortable: false}, {name: "action"}];
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

  AddForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  EditForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
    ]),
    name: new FormControl('', [
      Validators.required,
    ]),
    content: new FormControl('', [
      Validators.required,
    ]),
  });


  constructor(public activatedRoute: ActivatedRoute,
              private httpServerService: HttpServerService,
              private i18n: NzI18nService,
              private router: Router,
              private modalService: BsModalService,
              notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.params['id'];
    // get data
    this.httpServerService.getPost().subscribe((data) => {
      // this.datas = data;
      this.dataDisplay = data;
    })
  }

  // searchValue(e:any): void{
  //   console.log(555,e)
  //   if (e.length > 0){
  //     this.dataDisplay = this.datas.filter((item: any) => {
  //       item.name.indexOf(e) !== -1 && item.content.indexOf(e) !== -1
  //     });
  //   }else  this.dataDisplay = this.datas;
  //
  // }

  //ham sap xep theo name
  sortFn = (a: any, b: any) => a.name.localeCompare(b.name);

  handleDetail(e: any) {
    this.router.navigateByUrl(`/post-detail/${e}`);
  }

  //ham lay data detail
  handleDetailEdit(e: any) {
    this.httpServerService.getPostDetail(e).subscribe((data) => {
      this.EditForm.setValue({name: data.name, id: data.id, content: data.content})
    })
  }

  // ham xu ly update
  handleEdit() {
    const pay = {
      "id": this.EditForm.value.id,
      "name": this.EditForm.value.name,
      "content": this.EditForm.value.content,
    }

    this.httpServerService.editPost(this.EditForm.value.id, pay).subscribe(() => {
      this.EditForm.reset();
      this.httpServerService.getPost().subscribe((data) => {
        // this.datas = data;
        this.dataDisplay = data;
      })
    })
    this.notifier.notify('success', 'Sửa thành công');


    this.modalRef?.hide();
  }

// ham delete
  handleDelete() {
    this.httpServerService.deletePost(this.idDelete).subscribe(() => {
      this.httpServerService.getPost().subscribe((data) => {
        this.dataDisplay = data;
      })
    })
    this.modalRef?.hide()
    this.notifier.notify('success', 'Xóa thành công');
  }

  //ham set id delete
  handleIdDelete(e: number): void {
    this.idDelete = e;
  }

//mo modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

//ham add
  confirm(): void {
    const pay = {
      "name": this.AddForm.value.name,
      "content": this.AddForm.value.content,
    }

    this.httpServerService.PostApi(pay).subscribe((data) => {
      this.AddForm.reset();
      this.AddForm.reset();
      this.httpServerService.getPost().subscribe((data) => {
        // this.datas = data;
        this.dataDisplay = data;
      })
    })
    this.notifier.notify('success', 'Thêm thành công');
    this.modalRef?.hide();
  }

  decline(): void {
    this.EditForm.reset();
    this.modalRef?.hide();
  }


}
