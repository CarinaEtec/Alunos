import { Component, OnInit } from '@angular/core';
import { Aluno } from '../escola/Aluno';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public alunos: Aluno[];
  
  ngOnInit(): void {
    this.alunos = [
      {
        nome: "José",
        endereco: "Rua Sei Lá"
      },
      {
        nome: "Marcos",
        endereco:"Rua Não Sei" 
      },
      

    ]
  }

}