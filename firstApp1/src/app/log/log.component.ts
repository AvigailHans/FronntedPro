import { Component, OnInit,ViewChild } from '@angular/core';
import {User} from 'src/app/user'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  @ViewChild("signupForm") form: NgForm;
  fname:string="";
  lname:string="";
  mail:string="";
  password: string="";
   school:string="";
   phon:string="";

  constructor() { 

  }
  onSubmitForm()
  {
    if (this.form.invalid) {
      alert("the form is invalid!!!");
      return;
  }
  
    this.form.reset();}
  ngOnInit() {
  }
}
