import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-lib-login',
  templateUrl: './com-lib-login.component.html',
  styleUrls: ['./com-lib-login.component.css']
})
export class ComLibLoginComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  loginFunction() {
    this.router.navigateByUrl('/userhome');
  }

}
