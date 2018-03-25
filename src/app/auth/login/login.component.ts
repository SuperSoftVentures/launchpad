import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private hide: boolean = true;
  private redirect: string = '';
  private username: string = "";
  private password: string = "";

  constructor(private as: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.redirect = params['redirect']);
  }

  login() {
    this.as.authenticate(this.username, this.password);
    if (this.redirect)
      this.router.navigate([this.redirect]);
    else
      this.router.navigate(['']);
  }

}
