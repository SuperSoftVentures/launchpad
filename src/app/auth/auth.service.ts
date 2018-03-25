import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class User {
  id: string;
  displayName: string;
  firstName: string;
  lastName: string;
  companyCode: string;
}

@Injectable()
export class AuthService extends BaseService {
  private bAuthenticated: boolean = false;
  private authToken: string = '';
  private user: User = null;

  constructor(private http: HttpClient) {
    super();
  }

  authenticate(username: string, password: string) {
    this.bAuthenticated = true;
    this.authToken = 'Basic ' + btoa(username + ':' + password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.get(this.getUrl('rest/user'), httpOptions).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    );
  }

  isAuthenticated(): boolean {
    return this.bAuthenticated;
  }

  getAuthToken() : string {
    return this.authToken;
  }

  getUser(): User {
    return this.user;
  }
}
