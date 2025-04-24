import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  
  //  el: ElementRef
  // constructor(e: ElementRef) {
  //   this.el = e
  //  }

  constructor(public el: ElementRef) {
    
  }   // This is callled dependency injection

  @HostBinding("style.backgroundColor") bgColor = "red"
  
  @HostBinding("style.color") textColor = "orange"
  
  @HostListener("mouseenter") changeFontSize() {
    this.el.nativeElement.style.fontSize = "30px"
    // this.el.nativeElement.style.transition = 'font-size 0.3s ease';
    console.log("Mouse Enter");
    
  }

  @HostListener("mouseleave") resetFontSize() {
    this.el.nativeElement.style.fontSize = '16px';
    this.el.nativeElement.style.transition = 'font-size 0.3s ease';
    console.log('Mouse Leave');
  }
}
