import { CursoResponse } from "../../../curso/models/responses/curso.response";

export class CertificadoResponse {
  public Id: number;
  public Curso: CursoResponse;
  public CaminhoArquivo: string;
  public DataUpload: Date;

  constructor(
    id: number,
    curso: CursoResponse,
    caminhoArquivo: string,
    dataUpload: Date
  ) {
    this.Id = id;
    this.Curso = curso;
    this.CaminhoArquivo = caminhoArquivo;
    this.DataUpload = dataUpload;
  }
}
