import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{
  @Input() appHighlight = "blue"

  constructor(
    private el: ElementRef
  ) {

  }
  ngOnInit() {
    this.el.nativeElement.style.color = this.appHighlight;
  }

}
