import { Component, OnInit,Input, Output, EventEmitter,ViewChild,ElementRef  } from '@angular/core';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
   
  @Input() mybook:book;
  @Output() bookdeleted=new EventEmitter<book>();
  @Output() added=new EventEmitter<book>();
  @Input() age:boolean;
  add()
  {
    this.mybook.sumoflending++;
    this.added.emit(this.mybook);
  }
  del()
  { this.bookdeleted.emit(this.mybook)
  }

  ngOnInit() {

  }



}
export  enum Category{children, Comics,adult, history}
export class book
{
  name:string
  auditor:string
 iscategory:Category
 publishingYear:number
 sumoflending:number
 
 constructor(n,a,i,p,s) {
   this.name=n;
   this.auditor=a;
   this.iscategory=i;
   this.publishingYear=p;
   this.sumoflending=s;
 }

}