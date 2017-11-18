import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-lib-signup',
  templateUrl: './com-lib-signup.component.html',
  styleUrls: ['./com-lib-signup.component.css']
})
export class ComLibSignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signedUp(){
    this.router.navigateByUrl('/signin');
  }

}
