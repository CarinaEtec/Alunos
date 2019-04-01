import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import { Aluno } from '../escola/Aluno';
import { LoadingController, AlertController } from '@ionic/angular';
import { AlunosService } from '../providers/alunos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public alunos: Aluno[];

  constructor(private loadingCtrl:LoadingController,
              private alertCtrl:AlertController,
              private alunosService: AlunosService){
  }
  
  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message:'Aguarde enquanto os alunos são carregados...'
    });

    await loading.present();

    this.alunosService.lista()
    .subscribe(
      (alunos)=>{
        this.alunos = alunos
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