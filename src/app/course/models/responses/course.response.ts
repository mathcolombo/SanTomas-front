import { PlatformResponse } from "../../../platform/models/responses/platform.response";

export class CourseResponse {
  public Id: number;
  public CourseName: string;
  public Url: string;
  public Platform: PlatformResponse;
  public Hours: number;

  constructor(
    id: number,
    courseName: string,
    url: string,
    platform: PlatformResponse,
    hours: number,
  ) {
    this.Id = id;
    this.CourseName = courseName;
    this.Url = url;
    this.Platform = platform;
    this.Hours = hours;
  }
}
