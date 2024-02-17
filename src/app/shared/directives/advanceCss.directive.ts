import { Directive, ElementRef, Host, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: '[advanceCss]'
})
export class AdvanceCssDirective implements OnInit{
    constructor(
        private eleRef: ElementRef,
        private rendrer: Renderer2){
        
    }
    ngOnInit(): void {
        this.rendrer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'yellowgreen')
        this.rendrer.setStyle(this.eleRef.nativeElement, 'color', 'black');
        this.rendrer.setStyle(this.eleRef.nativeElement, 'border', '2px solid red');
    }

    @HostListener('mouseover')
    onMouseHover(){
        this.rendrer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'midnightblue');
        this.rendrer.setStyle(this.eleRef.nativeElement, 'color', 'white');
    };

    @HostListener('mouseout')
    onMouseOut(){
        this.rendrer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'yellowgreen');
        this.rendrer.setStyle(this.eleRef.nativeElement, 'color', 'black');

    }
}