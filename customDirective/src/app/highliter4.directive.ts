import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighliter4]"
})
export class Highliter4Directive {
  @Input()
  appHighliter4;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.color = this.appHighliter4;
  }

  ngOnChanges() {
    this.el.nativeElement.style.color = this.appHighliter4;
  }
}
