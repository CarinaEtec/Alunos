import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Aluno } from '../escola/Aluno';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {

  private aluno: Aluno



  constructor(private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params =>{
        this.aluno = <Aluno>JSON.parse(params["alunoSelecionado"]);

        console.log("O aluno que chegou na pagina de escolha é: " + this.aluno.nome);
      });
  }



  avancaCadastro(){
    let extras: NavigationExtras = {
      queryParams:{
        alunoSelecionado: JSON.stringify(this.aluno),
      }
    };
    this.navCtrl.navigateForward(['cadastro'], extras);
  }
}