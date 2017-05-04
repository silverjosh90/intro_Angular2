import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'At GOTO Conference!';
  name = "Josh";
  taco = "carne asada";
  condiments = "Dijon";

  handleBlur(event:any) : void {
    this.name = event.target.value
  }

  handleChange(value: string) : void {
    this.taco = value
  }

  myCars = [
    'Ferrari',
    'Tesla',
    'BMW',
    'Lambo'
  ]

}
