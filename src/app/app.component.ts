import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public min:number;
  public max:number;
 

  myOnFinish(event) {
    this.min=event.from;
    this.max=event.to;
    console.log(this.min);
    console.log(this.max);
  }


  /*myOnUpdate(event) {
    this.min=event.from;
    this.max=event.to;
    console.log(this.min);
    console.log(this.max);
}

myOnChange(event) {
  this.min=event.from;
  this.max=event.to;
  console.log(this.min);
  console.log(this.max);
}*/
}