import { CategoriaResponse } from "../../../categoria/models/responses/categoria.response";
import { PlataformaResponse } from "../../../plataforma/models/responses/plataforma.response";
import { StatusCursoEnum } from "../enums/status-curso.enum";

export class CursoResponse {
  public Id: number;
  public Nome: string;
  public Url: string;
  public Plataforma: PlataformaResponse;
  public Categoria: CategoriaResponse;
  public DataInicio: Date;
  public DataConclusao: Date;
  public Status: StatusCursoEnum;
  public Progresso: number;

  constructor(
    id: number,
    nome: string,
    url: string,
    plataforma: PlataformaResponse,
    categoria: CategoriaResponse,
    dataInicio: Date,
    dataConclusao: Date,
    status: StatusCursoEnum,
    progresso: number,
  ) {
    this.Id = id;
    this.Nome = nome;
    this.Url = url;
    this.Plataforma = plataforma;
    this.Categoria = categoria;
    this.DataInicio = dataInicio;
    this.DataConclusao = dataConclusao;
    this.Status = status;
    this.Progresso = progresso;
  }
}
