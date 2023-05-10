export class User {
  constructor(
    public clientID: string,
    public quota: number,
    public jwt: string,
    public jwtExpirationTime: Date,
    public testAccount?: boolean,
    public api_key?: string
  ) {}

  get token(): string | null {
    if (!this.jwtExpirationTime || this.jwtExpirationTime < new Date()) {
      return null;
    }
    return this.jwt;
  }
}
