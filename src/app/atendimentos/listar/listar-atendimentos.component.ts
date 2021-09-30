import { Component, OnInit } from '@angular/core';
import { AtendimentoService, Atendimento } from '../shared';

@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrls: ['./listar-atendimentos.component.css']
})
export class ListarAtendimentosComponent implements OnInit {

  atendimentos: Atendimento [];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit() {
    this.atendimentos = this.atendimentoService.listarTodos();
  }
  listarTodos(): Atendimento[]{
    return this.atendimentoService.listarTodos();
  }
  
  alterarStatus(atendimento: Atendimento): void{
    if(confirm('Deseja alterar o status do(a) paciente ' + atendimento.nome + '?' )){
      this.atendimentoService.alterarStatus(atendimento.id);
      this.atendimentos = this.listarTodos();
    } else {
      this.atendimentos = this.listarTodos();
    }
  }

  remover($event: any, atendimento: Atendimento): void{
    $event.preventDefault(); //nenhuma ação é feita ao clicar
    if(confirm('Deseja remover paciente ' + atendimento.nome + ' da lista ?' )){
      this.atendimentoService.remover(atendimento.id);
      this.atendimentos = this.listarTodos();
    } else {
      this.atendimentos = this.listarTodos();
    }
  }

}
