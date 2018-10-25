import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appHighliter]"
})
export class HighliterDirective {
  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.el.nativeElement.style.color = "red";
  }
}
