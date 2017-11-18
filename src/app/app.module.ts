import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComLibLoginComponent } from './com-lib-login/com-lib-login.component';
import { ComLibSignupComponent } from './com-lib-signup/com-lib-signup.component';
import { UserHomeComponent } from './user-home/user-home.component';

const appRoutes: Routes = [
  { path: 'signin', component: ComLibLoginComponent},
  { path: 'signup', component: ComLibSignupComponent},
  { path: 'userhome', component: UserHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ComLibLoginComponent,
    ComLibSignupComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
