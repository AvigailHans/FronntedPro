import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { debug } from 'util';
import { QuesstionService } from 'src/app/services/quesstion.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
g:number;
sss:string;
ss:string;
@Output() Added = new EventEmitter<comment>();
q:string[];
  constructor(public myQuestion:QuesstionService) {
  
   }

  ngOnInit() {
    debugger;
    this.q=this.myQuestion.getLIst2();
  }
  OnAdd() {
  
    this.Added.emit(new comment(this.g, this.ss, this.sss));
  }
}
export class comment{
  g:number;
  sss:string;
  ss:string;
  constructor(g:number,sss:string,ss:string) 
  {
  this.g=g;
  this.ss=ss;
  this.sss=sss;
   }
}
