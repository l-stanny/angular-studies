import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-book-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  firstname?: string;
  lastname?: string;
  numeral?: string;
  gotit?: string;

  constructor() {
    this.firstname = 'Angular';
    this.lastname = 'Developer';
  }

  ngOnInit() {}
  
  onSubmit(form:any): void {
    function randomInt(min:number, max:number){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let numeral: string = randomInt(1, 9).toString();
    this.gotit = numeral;
  }
}
