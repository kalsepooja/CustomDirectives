import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToLowecase]'
})
export class ToLowecaseDirective {

  constructor(
    private eleRef: ElementRef,
    private rendrer: Renderer2) {

   }

  //  @HostListener('keyup')
  //  onKeyUp(){
  //   console.log(this.eleRef.nativeElement.value);
  //   this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.toLowerCase()
    
  //  }

  @HostListener("input", ['$event'])
  onInput(eve: Event){
    console.log(eve);
    console.log(eve.target);
    console.log(eve.target);
    let inputControl = eve.target as HTMLInputElement;
    let val = inputControl.value.toLowerCase();
    inputControl.value = val;
  }

}
