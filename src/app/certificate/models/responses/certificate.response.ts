import { CourseResponse } from "../../../course/models/responses/course.response";

export class CertificateResponse {
  public Id: number;
  public Course: CourseResponse;
  public FilePath: string;
  public UploadDate: Date;

  constructor(
    id: number,
    course: CourseResponse,
    filePath: string,
    uploadDate: Date
  ) {
    this.Id = id;
    this.Course = course;
    this.FilePath = filePath;
    this.UploadDate = uploadDate;
  }
}
