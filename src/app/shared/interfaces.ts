export interface Accordion {
  route: string;
  description: string;
  arguments: Argument[];
}

export interface Argument {
  name: string;
  caracter: 'optional' | 'required';
  definition: string;
}

export interface Navigation {
  previous?: {
    name: String;
    link: String;
  };
  next?: {
    name: String;
    link: String;
  };
}

export interface Authentification {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthResponseData {
  clientID: string;
  quota: number;
  jwt: string;
  jwtExpirationTime: string;
  testAccount?: boolean;
  api_key?: string;
}
