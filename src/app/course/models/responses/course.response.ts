import { CategoryResponse } from "../../../category/models/responses/category.response";
import { PlataformResponse } from "../../../platform/models/responses/plataform.response";
import { CourseStatusEnum } from "../enums/course-status.enum";

export class CourseResponse {
  public Id: number;
  public Name: string;
  public Url: string;
  public Plataform: PlataformResponse;
  public Category: CategoryResponse;
  public StartDate: Date;
  public CompletionDate: Date;
  public Status: CourseStatusEnum;
  public Progress: number;

  constructor(
    id: number,
    name: string,
    url: string,
    plataform: PlataformResponse,
    category: CategoryResponse,
    startDate: Date,
    completionDate: Date,
    status: CourseStatusEnum,
    progress: number,
  ) {
    this.Id = id;
    this.Name = name;
    this.Url = url;
    this.Plataform = plataform;
    this.Category = category;
    this.StartDate = startDate;
    this.CompletionDate = completionDate;
    this.Status = status;
    this.Progress = progress;
  }
}
