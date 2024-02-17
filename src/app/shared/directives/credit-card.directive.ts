import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit {

  constructor(private eleRef: ElementRef) { }
  ngOnInit(): void {
    this.createErrMsg()
  }

  @HostListener('input', ['$event'])
  validateCreditCard(eve: Event){
    let inputControl = eve.target as HTMLInputElement;
    let inputVal = inputControl.value;
    // console.log(inputControl.value);
   inputVal = inputControl.value.replace(/\s+/g, '' )
    if(inputVal.length > 16){
      inputVal = inputVal.substring(0, 16)
    }
    if(/[^\d]/.test(inputVal)){
      inputControl.nextElementSibling?.classList.remove('d-none')
    }else{
      inputControl.nextElementSibling?.classList.add('d-none')
    }
    // console.log(inputVal);
    inputVal = this.chunkeddArr(inputVal);
    console.log(inputVal);

    inputControl.value = inputVal
    
    
  }


  private chunkeddArr(str: string){
    let arr : Array<string> = [];
    for(let i = 0; i < str.length; i+= 4){
      arr.push(str.slice(i, i + 4))
    }

    return arr.join(" ")
  }

  private createErrMsg(){
    let p = document.createElement("p");
    p.className = "alert alert-danger d-none";
    p.innerHTML = "Plz enter valid Numbers !!";
    
    console.log(this.eleRef.nativeElement.parentNode);
    this.eleRef.nativeElement.parentNode.append(p)
  }

}
