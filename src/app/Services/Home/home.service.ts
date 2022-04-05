import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  messageSource = new BehaviorSubject<string>("default message");
  // subcribe theo dõi thay đổi value
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // method này để change source message
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
