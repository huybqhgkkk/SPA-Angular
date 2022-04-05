import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { HomeService } from '../Services/Home/home.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() childMessage: string = "";
  @Output() voteSize = new EventEmitter();
  @Output() voteReset = new EventEmitter();
  counter: number = 0;
  message: string = "";


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.currentMessage.subscribe(message => this.message = message);
  }

  voted() {
    this.counter ++;
    this.voteSize.emit(this.counter);
    // Hàm vote sẽ tăng counter lên 1, đồng thời thông qua EventEmitter bắn value counter này ra component cha
  }

  reset(){
    this.counter = 0;
    this.voteReset.emit(this.counter);
  }

  createMessage(message: string) {
    this.homeService.changeMessage(message);
  }






}
