import { CarsService } from "./../../servies/cars.service";
import { CarModel } from "./../../model/car";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-addproduct",
  templateUrl: "./addproduct.component.html",
  styleUrls: ["./addproduct.component.css"]
})
export class AddproductComponent implements OnInit {
  newCar: CarModel = {
    id: null,
    car_company: null,
    car_model: null,
    year_of_release: null
  };
  constructor(private carServices: CarsService) {}

  createNewCar(formData) {
    this.newCar.car_model = formData.car_model;
    this.newCar.car_company = formData.car_company;
    this.newCar.year_of_release = formData.year_of_release;
    this.carServices.newCar = this.newCar;
  }

  ngOnInit() {}
}
