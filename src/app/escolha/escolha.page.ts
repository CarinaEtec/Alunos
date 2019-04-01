import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../escola/Aluno';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {

  constructor(private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params =>{
        let aluno = <Aluno>JSON.parse(params["alunoSelecionado"]);

        console.log("O aluno que chegou na pagina de escolha é: " + aluno.nome);
      });
  }

  voltar(){
    this.navCtrl.back();
  }

}