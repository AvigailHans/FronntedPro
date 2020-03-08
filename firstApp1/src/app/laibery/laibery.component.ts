import { Component, OnInit,ViewChild,ElementRef,Input  } from '@angular/core';
import { book, Category } from '../book/book.component';

@Component({
  selector: 'app-laibery',
  templateUrl: './laibery.component.html',
  styleUrls: ['./laibery.component.css']
})
export class LaiberyComponent implements OnInit {
 booklist:book[]=[new book("ads","fgd",Category.adult,12,0),
 new book("sss","fss",Category.Comics,1,0),
 new book("qqq","ssas",Category.children,2,0),
 new book("abvb","bv",Category.adult,16,0)]
 @Input() totalsume:number;
 @ViewChild('lable') lablew: ElementRef;
 gil:number;
 new:boolean;
  constructor() { 
  this.totalsume=0;
 
  }
 
  ngOnInit() {
    this.lablew.nativeElement.innerHTML=this.totalsume;
  this.new=false;
  }
  delete(boo:book)
  {
      this.booklist = this.booklist.filter(function(b){
      return b.name != boo.name
    });

  }
  addsum(boo:book)
  {
    this.totalsume++;
    this.lablew.nativeElement.innerHTML=this.totalsume;

  }

  newToList(boo:book){
    this.booklist.push(boo);

  }
 

}
