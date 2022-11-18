import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{
  defaultColor =  'rgb(211, 211, 211)'; // lightgray
  @Input('appHighlight') bgColor = '';

  constructor(
    private el: ElementRef
  ) {
    el.nativeElement.style.customProperty = true;
  }
  ngOnInit() {
    console.log(111, this.bgColor)
    this.el.nativeElement.style.color = this.bgColor || this.defaultColor;
  }

}
