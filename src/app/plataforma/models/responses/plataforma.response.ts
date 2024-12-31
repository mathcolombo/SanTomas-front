export class PlataformaResponse {
  public Id: number;
  public Nome: string;
  public Url: string;

  constructor(
    id: number,
    nome: string,
    url: string
  ) {
    this.Id = id;
    this.Nome = nome;
    this.Url = url;
  }
}
