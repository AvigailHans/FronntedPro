import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class JokesService {
 joke=["FHHGF","ghfhg","cfb","ggg"]
 selectedjoke:string
 getJOke(){
  var s=this.joke[Math.floor( Math.random()*this.joke.length)];
   this.selectedjoke=s;
   return s;
 }
 getLIst(){
   return this.joke;
 }
  constructor() { 

  }
}
