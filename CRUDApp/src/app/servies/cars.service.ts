import { Injectable, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CarsService {
  constructor(private http: HttpClient) {}
  get cars(): Observable<{}> {
    return this.http.get("http://localhost:3000/carsList");
  }
  set newCar(newCarObj) {
    this.http.post("http://localhost:3000/carsList", newCarObj).subscribe();
  }
  deleteCar(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:3000/carsList/${id}`);
  }
}
