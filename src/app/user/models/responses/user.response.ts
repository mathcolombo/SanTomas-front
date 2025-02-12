export class UserResponse {
  public Id: number;
  public Username: string;
  public Email: string;
  public Password: string;
  public RegisterDate: Date;

  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    registerDate: Date
  ) {
    this.Id = id;
    this.Username = username;
    this.Email = email;
    this.Password = password;
    this.RegisterDate = registerDate;
  }
}
