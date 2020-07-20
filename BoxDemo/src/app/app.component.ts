import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<h1>{{name}}</h1>
               <box-login> </box-login>`
})
export class AppComponent  { name = 'Login Details'; }
