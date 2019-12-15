import { Injectable } from '@angular/core';
import { ServiceUitility } from './ServiceUitility';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private route = '/userprofile';
  private _changepassword = this.route + '/changepassword';
  private route1 = '/SchoolUser';
  private _loginUrl = environment.baseUrl + this.route1 + '/loginUser';

  constructor(private serviceUitility: ServiceUitility, private http: HttpClient) { }

  //For login user we have to directly call the url since we don't use Token.
  loginUser(user: { UserName: string; Password: string; }) {
    return this.http.post<any>(this._loginUrl, user);
  }

  UpdatePassword(User: any) {
    return this.serviceUitility.postRequest(this._changepassword, User);
  }
}
