export interface Ilogin {
email: string;
password: string;
}


export class LoginDetails implements Ilogin {
    constructor(public email: string,
        public password: string) { }
}
