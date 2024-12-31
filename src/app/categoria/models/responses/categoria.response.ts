export class CategoriaResponse {
  public Id: number;
  public Nome: string;

  constructor(
    id: number,
    nome: string
  ) {
    this.Id = id;
    this.Nome = nome;
  }
}
