import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Aluno } from '../escola/Aluno';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public alunos: Aluno[];

  constructor(public http:HttpClient)
  {
  }
  
  ngOnInit(): void {
    this.http.get<Aluno[]>('http://gilsonpolito-api.herokuapp.com/alunos')
    .subscribe(
      (alunos)=>{
        this.alunos = alunos;
      }
    )
  }

}