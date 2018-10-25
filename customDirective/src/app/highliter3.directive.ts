import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighliter3]"
})
export class Highliter3Directive {
  @Input()
  appHighliter3;
  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.el.nativeElement.style.color = this.appHighliter3;
  }
}
