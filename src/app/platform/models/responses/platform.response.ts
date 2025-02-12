export class PlatformResponse {
  public Id: number;
  public PlatformName: string;
  public Url: string;

  constructor(
    id: number,
    platformName: string,
    url: string
  ) {
    this.Id = id;
    this.PlatformName = platformName;
    this.Url = url;
  }
}
