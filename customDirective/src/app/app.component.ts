import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "myApp";
  active = "blue";

  ngOnInit() {
    setTimeout(() => {
      this.active = "orange";
      console.log(this.active);
    }, 2000);
  }
}
