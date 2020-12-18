import { Component, OnInit } from '@angular/core';
import { AlunoService } from './service/aluno-service';
import { Aluno } from './model/aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  aluno: Aluno;
  alunos: Aluno[] = [];

    constructor(private service: AlunoService){
      this.aluno = new Aluno();
    }
  ngOnInit(): void {
    this.listar();
  }

    // tslint:disable-next-line:typedef
    public gravar(){
      this.aluno.gerarMedia();
      this.aluno.gerarSituacao();
      this.service.create(this.aluno).subscribe(res => {
        this.aluno = new Aluno();
      });
      window.location.reload();
    }

    // tslint:disable-next-line:typedef
    public listar(){
      this.service.find().subscribe(res => {
        this.alunos = res;
      });
    }

    // tslint:disable-next-line:typedef
    public deletar(aluno){
      this.service.delete(aluno.id).subscribe(res =>{
        this.aluno = res;
        this.listar();
      });
    }

    // tslint:disable-next-line:typedef
    public atualizar(){
      this.service.update(Aluno, this.aluno.id).subscribe(res => {
        this.aluno = res;
      });
    }

}
