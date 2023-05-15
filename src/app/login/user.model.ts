export class User {
  constructor(
    public clientID: string,
    public quota: number,
    public jwt: string,
    public dateUntil: string,
    public jwtExpirationTime: string,
    public testAccount?: boolean,
    public api_key?: string,
    public new_api_key?: string
  ) {}
}
