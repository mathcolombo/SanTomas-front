export class CategoryResponse {
  public Id: number;
  public Name: string;

  constructor(
    id: number,
    name: string
  ) {
    this.Id = id;
    this.Name = name;
  }
}
