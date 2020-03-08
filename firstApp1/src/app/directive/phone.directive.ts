import { Directive } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {
    constructor(private el:ElementRef,private rend:Renderer2) {
  
     }
  @HostListener('input')
  onkeypress()
  {
    var x= this.el.nativeElement.value;
    if(isNaN(x)||x.lenght>9)
    {
    this.rend.setProperty(this.el.nativeElement,"value",x.slice(0,-1));
    this.rend.setStyle(this.el.nativeElement,"borderColor","red");
    }
    else this.rend.setStyle(this.el.nativeElement,"borderColor","blue");
  }
  
  }
  