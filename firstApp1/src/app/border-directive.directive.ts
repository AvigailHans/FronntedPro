
import {  ElementRef, Renderer2,HostListener ,Directive} from '@angular/core'

@Directive({
  selector: '[appBorderDirective]'
})
export class BorderDirectiveDirective {

  constructor(private elref:ElementRef,private render:Renderer2) { }
  ngOnInit(){
    //this. el.nativeElement.style.backgroundColor = this.color;
    //this.re.setElementStyle(this.el.nativeElement,"backgroundColor",this.color);
    this.render.setStyle(this.elref.nativeElement,"backgroundColor","red");
    this.render.setValue(this.elref.nativeElement,"bla bla ");
  }
  @HostListener('keypress')
  onkeypress(){
    this.render.setStyle(this.elref.nativeElement,'borderColor',"red");
  }

}
