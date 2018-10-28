import { CarsService } from "./servies/cars.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AddproductComponent } from "./components/addproduct/addproduct.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, AddproductComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "addproduct",
        component: AddproductComponent
      }
    ])
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
