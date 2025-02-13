import { CourseResponse } from "../../../course/models/responses/course.response";
import { UserResponse } from "../../../user/models/responses/user.response";
import { CourseStatusEnum } from "../enums/course-status.enum";

export class CourseUserResponse {
  public Id: number;
  public Course: CourseResponse;
  public User: UserResponse;
  public StartDate: Date;
  public CompletionDate: Date;
  public Status: CourseStatusEnum;
  public HoursWorked: number;
  public Progress: number;

  constructor(
    id: number,
    course: CourseResponse,
    user: UserResponse,
    startDate: Date,
    completionDate: Date,
    status: CourseStatusEnum,
    hoursWorked: number,
    progress: number
  ) {
    this.Id = id;
    this.Course = course;
    this.User = user;
    this.StartDate = startDate;
    this.CompletionDate =completionDate ;
    this.Status = status;
    this.HoursWorked = hoursWorked;
    this.Progress = progress;
  }
}
