import { Component, OnInit } from '@angular/core';
import { QuesstionService } from 'src/app/services/quesstion.service';
import { Input,Output,EventEmitter  } from '@angular/core';
import { comment } from 'src/app/comment/comment.component';
import { templateJitUrl } from '@angular/compiler';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
search:string="";
@Input() messege: string;
@Input() class:string ;
s:boolean;
bb:string="false";
index:number=-1;
myq:string=""
c:comment;
d:boolean=true
questionsList:string[];
  constructor(public myQuestion:QuesstionService) { }
  ngOnInit() {
    // this.myQuestion.getLIst(
    //   data=>this.myQuestion=data,
    //   err=>console.log(err)
    // )

    this.questionsList=this.myQuestion.getLIst();
  if (!this.messege) {
    this.messege = "there is no message"
  }
  if (!this.class) {
    this.class ="false";
  }
  this.nextQuestion();
  }
  nextQuestion(){  
    this.d=true
    if(this.index<(this.myQuestion.getLength()-1)){
      this.index++;
    }
  this.ggg();
  }
  beforeQuestion()
  {
    this.d=true
    if(this.index>0){
      this.index--;
      
 this.ggg();
  }
}
  ggg(){
    this.myq=this.myQuestion.getQuestionByNumber(this.index);
  }
f()
{
 this.s=true;
}
onAdded(newc:comment){
  this.c=newc;
  this.d=false
}

}


