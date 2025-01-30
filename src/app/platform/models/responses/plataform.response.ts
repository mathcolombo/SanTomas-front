export class PlataformResponse {
  public Id: number;
  public Name: string;
  public Url: string;

  constructor(
    id: number,
    name: string,
    url: string
  ) {
    this.Id = id;
    this.Name = name;
    this.Url = url;
  }
}
