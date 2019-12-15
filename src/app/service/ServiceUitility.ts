import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceUitility {

  constructor(private http: HttpClient) { }

  private getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': JSON.parse(localStorage.getItem('id_token'))
      })
    };
    return httpOptions;
  }

  postRequest(url: string, requestObj: any) {
    // console.log('url-' + environment.baseUrl + url );
    return this.http.post<any>(environment.baseUrl + url, requestObj, this.getHttpOptions());
  }

  private getHttpOptionsForUpload() {
    const httpOptionsForUpload = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'x-access-token': JSON.parse(localStorage.getItem('id_token'))
      })
    };
    return httpOptionsForUpload;
  }

  postUploadRequest(url: string, requestObj: any) {
    // console.log('url-' + environment.baseUrl + url );
    return this.http.post<any>(environment.baseUrl + url, requestObj, this.getHttpOptionsForUpload());
  }

}
