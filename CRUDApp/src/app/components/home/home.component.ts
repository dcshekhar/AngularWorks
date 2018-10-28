import { CarsService } from "./../../servies/cars.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private carsService: CarsService) {}

  carsList;

  fetchData() {
    this.carsService.cars.subscribe({
      next: car => {
        this.carsList = car;
      },
      error: error => console.log(error)
    });
  }

  delete(id) {
    this.carsService.deleteCar(id).subscribe({
      next: () => this.fetchData(),
      error: error => console.log(error)
    });
  }

  ngOnInit() {
    this.fetchData();
  }
}
