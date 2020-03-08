import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class QuesstionService {
baseUrl:string="http://localhost:55572";
selected:string="";
questions:string[];
category:string[];
  constructor(private http:HttpClient) {
    debugger;
    this.http.get<string[]>(this.baseUrl+"/api/getQuestions").subscribe(
      data=>this.questions=data,
      error=>this.questions=null)
      this.http.get<string[]>(this.baseUrl+"/api/getCategory").subscribe(
        data=>this.category=data,
        error=>this.category=null)
   }
getQuestionByNumber(index:number){
   var s=this.questions[index];
   this.selected=s
   return s
 }
 getLIst(/*successFunc,errFunc*/){
  // this.http.get<string[]>(this.baseUrl+"/api/getQuestions").subscribe(
  //   data=>successFunc(data),
  //   error=>errFunc(error))
   return this.questions;
  }
  getLIst2(/*successFunc,errFunc*/){
    // this.http.get<string[]>(this.baseUrl+"/api/getQuestions").subscribe(
    //   data=>successFunc(data),
    //   error=>errFunc(error))
     return this.category;
    }
 getLength(){
 
   return this.questions.length}
  
}
