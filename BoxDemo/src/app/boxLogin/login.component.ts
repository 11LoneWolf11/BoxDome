import { Component, OnInit, NgModule } from '@angular/core';
import { LoginDetails } from './loginClass';
import { ErrorClass } from './errorClass';



@Component({
    selector:'box-login',
    //template: '<h1>Wiring test </h1>'                               
    templateUrl:'app/boxLogin/login.component.html',                 
    styleUrls: ['app/boxLogin/login.component.css']  
})

export class LoginComponent implements OnInit{
    name: string = "Testing";
    loginclass: LoginDetails;
    errors: ErrorClass[] = [];

    ngOnInit() {
        
    }

    //resolved(captchaResponse: string) {
    //    console.log(`Resolved captcha with response: ${captchaResponse}`);
    //}

    onButtonClick(email: string, password: string) {
        //this.loginclass.email = "sdfsfd";
        //this.loginclass.password = "sdfsfd";
        //this.errors = [{ code: '101', message: 'missing email!' },
        //    { code: '101', message: 'missing email!' },
        //    { code: '101', message: 'missing email!' }]
        
        if (email.length == 0) {
            //this.errors = [{ code: '101', message: 'missing email!' }]
            this.errors.push(new ErrorClass("101", "missing email!"));
        }

        if (password.length == 0) {
            this.errors.push(new ErrorClass("102", "missing password!"));
        }
        console.log("Button clicked " + email +  " " + password);
    }
}