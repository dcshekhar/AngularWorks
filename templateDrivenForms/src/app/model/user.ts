export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public confirmPassword: string
  ) {}
}
/*
export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
    public dob: {
      day: number;
      month: string;
      year: number;
    },
    public gender: string
  ) { }
}
*/
