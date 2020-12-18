export class Aluno{

    id: number;
    nome: string;
    professor: string;
    materia: string;
    trimestre1: number;
    trimestre2: number;
    trimestre3: number;
    trimestre4: number;
    media: number;
    situacao: string;

    constructor(id?: number, nome?: string, professor?: string, materia?: string, trimestre1?: number,
                trimestre2?: number, trimestre3?: number, trimestre4?: number){
                    this.id = id;
                    this.nome = nome;
                    this.professor = professor;
                    this.materia = materia;
                    this.trimestre1 = trimestre1;
                    this.trimestre2 = trimestre2;
                    this.trimestre3 = trimestre3;
                    this.trimestre4 = trimestre4;
    }

    // tslint:disable-next-line:typedef
    public gerarMedia(){
      this.media = (this.trimestre1 + this.trimestre2 + this.trimestre3 + this.trimestre4) / 4;
      return this.media;
    }

    // tslint:disable-next-line:typedef
    public gerarSituacao(){
      if (this.media >= 7){
        this.situacao = "Aprovado";
      }else if (this.media <= 4){
        this.situacao = "Reprovado";
      }else{
        this.situacao = "Em Recuperação";
      }
    }



}
