export class MaincategoryResponse {
  public Id: number;
  public MainCategoryName: string;

  constructor(
    id: number,
    mainCategoryName: string
  ){
    this.Id = id,
    this.MainCategoryName = mainCategoryName;
  }
}
