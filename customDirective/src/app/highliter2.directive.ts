import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighliter2]"
})
export class Highliter2Directive {
  /*
  define a custom property here so that it can accept data from parent
  */

  @Input()
  colorPassed;

  constructor(private ele: ElementRef) {}
  ngOnInit() {
    this.ele.nativeElement.style.color = this.colorPassed;
  }
}
