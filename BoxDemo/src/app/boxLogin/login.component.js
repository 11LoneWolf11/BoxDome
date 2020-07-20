"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var errorClass_1 = require("./errorClass");
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.name = "Testing";
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //resolved(captchaResponse: string) {
    //    console.log(`Resolved captcha with response: ${captchaResponse}`);
    //}
    LoginComponent.prototype.onButtonClick = function (email, password) {
        //this.loginclass.email = "sdfsfd";
        //this.loginclass.password = "sdfsfd";
        //this.errors = [{ code: '101', message: 'missing email!' },
        //    { code: '101', message: 'missing email!' },
        //    { code: '101', message: 'missing email!' }]
        if (email.length == 0) {
            //this.errors = [{ code: '101', message: 'missing email!' }]
            this.errors.push(new errorClass_1.ErrorClass("101", "missing email!"));
        }
        if (password.length == 0) {
            this.errors.push(new errorClass_1.ErrorClass("102", "missing password!"));
        }
        console.log("Button clicked " + email + " " + password);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'box-login',
            //template: '<h1>Wiring test </h1>'                               
            templateUrl: 'app/boxLogin/login.component.html',
            styleUrls: ['app/boxLogin/login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map