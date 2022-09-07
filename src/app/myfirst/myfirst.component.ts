import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfirst',
  templateUrl: './myfirst.component.html',
  styleUrls: ['./myfirst.component.css']
})
export class MyfirstComponent implements OnInit {
 public message:string;
  constructor() { 
    this.message="Welcome";
    console.log(this.message);

  }

  ngOnInit(): void {
  }

}
