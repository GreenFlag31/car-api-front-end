export class User {
  constructor(
    public clientID: string,
    public quota: number,
    public jwt: string,
    public jwtExpirationTime: string,
    public testAccount?: boolean,
    public api_key?: string
  ) {}

  // get jwtStillAvailable(): boolean {
  //   if (new Date(this.jwtExpirationTime) < new Date()) {
  //     return false;
  //   }
  //   return true;
  // }
}
