import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  year =['2019','2018','2017','2016','2015','2014'];
  constructor() { }

  ngOnInit() {
    
  }
  name = 'Yogesh';
  public selectedVal = '2017';
  onChange(){
    console.log(this.selectedVal);
  }
}
