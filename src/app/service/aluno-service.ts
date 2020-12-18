import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../model/aluno';

const URL = 'http://localhost:3535/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService{

  constructor(private http: HttpClient){

  }

  // tslint:disable-next-line:typedef
  public create(aluno: Aluno) {
    return this.http.post<Aluno>('http://localhost:3535/aluno', aluno);
  }

  // tslint:disable-next-line:typedef
  public find(){
    return this.http.get<Aluno[]>('http://localhost:3535/aluno');
  }

  // tslint:disable-next-line:typedef
  public update(id, aluno){
    return this.http.put<Aluno>('http://localhost:3535/aluno' + id, aluno);
  }

  // tslint:disable-next-line:typedef
  public delete(id){
    return this.http.delete<Aluno>('http://localhost:3535/aluno' + id);
  }
}
