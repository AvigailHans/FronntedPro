
import {  ElementRef, Renderer2,HostListener ,Directive,Input,OnInit} from '@angular/core'
import { Element } from '@angular/compiler';

@Directive({
  selector: '[appDirecive1]'
})
export class Direcive1Directive implements OnInit{
  @Input('appDirecive1') text:string= "";
  constructor(private elref:ElementRef,private render:Renderer2  ){ }
  ngOnInit(){
   
  this.render.setStyle(this.elref.nativeElement,"borderColor","lightBlue");

  }
  @HostListener('blur')
  blur(){
    if(this.text=="")
  {this.render.setStyle(this.elref.nativeElement,"borderColor","red");
    this.render.setProperty(this.elref.nativeElement,"value","required field")
  }
  else 
  this.render.setStyle(this.elref.nativeElement,"borderColor","blue");
  }


}
