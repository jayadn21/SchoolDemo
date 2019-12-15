import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MenuService {
  private route = 'assets';
  private accountsMenuPath = this.route + '/AccountsMenu.json';

  constructor( private http: HttpClient) { }

  public GetAccountsMenu() {
    return this.http.get(this.accountsMenuPath);
  }

}
