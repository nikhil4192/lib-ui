import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ComLibLoginComponent } from './com-lib-login/com-lib-login.component';
import { ComLibSignupComponent } from './com-lib-signup/com-lib-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ComLibLoginComponent,
    ComLibSignupComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
