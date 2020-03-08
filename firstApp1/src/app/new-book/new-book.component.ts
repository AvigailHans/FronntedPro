import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { book, Category } from '../book/book.component';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
 name1:string
  auditor1:string
 iscategory1:Category
 publishingYear1:number
 sumoflending1:number
 @Output() newbook = new EventEmitter<book>(); 
  constructor() { }

  ngOnInit() {
  }
  addnew()
  {
    this.newbook.emit(new book(this.name1,this.auditor1,this.iscategory1,this. publishingYear1,0));
    this.name1="";
    this.auditor1="";
   this.publishingYear1=0;
   

  }
}
