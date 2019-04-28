import { Component, OnInit } from '@angular/core';
import { Aluno } from '../escola/Aluno';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private aluno: Aluno;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params =>{
        this.aluno = <Aluno>JSON.parse(params["alunoSelecionado"]);

      });
  }
}
