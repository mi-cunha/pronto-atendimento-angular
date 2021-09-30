import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[atendimentoAtendido]'
})
export class AtendimentoConcluidoDirective implements OnInit {
  @Input() atendimentoAtendido: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(){
    if(this.atendimentoAtendido){
      this.el.nativeElement.style.color = 'limegreen'
    }
  }

}
