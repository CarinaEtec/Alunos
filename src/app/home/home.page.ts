import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Aluno } from '../escola/Aluno';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public alunos: Aluno[];

  constructor(public http:HttpClient,
              private loadingCtrl:LoadingController,
              private alertCtrl:AlertController){
  }
  
  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message:'Aguarde enquanto os alunos são carregados...'
    });

    await loading.present();

    this.http.get<Aluno[]>('http://gilsonpolito-api.herokuapp.com/alunos')
    .subscribe(
      (alunos)=>{
        this.alunos = alunos;
      },
      async (err: HttpErrorResponse)=>{
        console.log('Deu erro ' + err.status);
        const al = await this.alertCtrl.create({
          header:'Erro!',
          message: 'Erro ao listar alunos',
          buttons: [{text: 'OK'}]
        });

        await al.present();
      }
    ).add(
      ()=>{
        loading.dismiss();
      }
    )
  }

}