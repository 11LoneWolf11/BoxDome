import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './boxLogin/login.component';
//import { RecaptchaModule } from 'ng-recaptcha';
import { Ng2GoogleRecaptchaModule } from 'ng2-google-recaptcha';
//import * as Rx from 'rxjs';
//import 'rxjs';
import { Observable } from 'rxjs';

@NgModule({
    imports: [BrowserModule, FormsModule, Ng2GoogleRecaptchaModule],
    declarations: [AppComponent, LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }