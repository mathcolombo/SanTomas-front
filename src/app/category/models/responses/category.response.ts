export class CategoryResponse {
  public Id: number;
  public CategoryName: string;
  public MainCategory: any;

  constructor(
    id: number,
    categoryName: string,
    mainCategory: any
  ) {
    this.Id = id;
    this.CategoryName = categoryName;
    this.MainCategory = mainCategory;
  }
}
