import { User } from "./../model/user";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent implements OnInit {
  // dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // months = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sept",
  //   "Oct",
  //   "Nov",
  //   "Dec"
  // ];
  // years = [1990, 1991, 1992, 1993, 1994];
  constructor() {}
  newUsers: User[] = new Array();

  demoUser: User = new User(null, null, null, null, null);

  ngOnInit() {}

  createAccount() {
    this.newUsers.push(this.demoUser);
    localStorage.setItem("new users list", JSON.stringify(this.newUsers));
  }
}
