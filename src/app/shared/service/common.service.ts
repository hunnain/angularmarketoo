import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { MsalService } from "@azure/msal-angular";
import { CommonErrorService } from './error/common-error.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private readonly _http: HttpClient;
  private base_url = environment.API_Base_URL;
  private userInfo = JSON.parse(localStorage.getItem('userInfo'));

  constructor(
    public error: CommonErrorService,
    // public auth: MsalService,
    private http: HttpClient
  ) {}

  getTocket() {
    // console.log('tocket', this.userInfo.accessToken);

    if (this.userInfo) return this.userInfo.accessToken;
    else return '';
  }

  httpErrorHandler(error: any) {
    console.log('error handler--', error);
    if (error.status === 403 || error.status === 500 || error.status === 400) {
      this.error.setError(error);
    } else if (error.status === 401) {
      //   this._auth.signout();
    }
    // return Observable.throw(new Error(error));
    return throwError(new Error(error));
  }

  post(url: string, body: Object): Observable<Response> {
    this.error.clearError();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.getTocket(),
    });
    return this.http
      .post(this.base_url + url, JSON.stringify(body), { headers: headers })
      .map((response: Response) => {
        return response;
      })
      .catch((error: any) => this.httpErrorHandler(error));
  }

  put(url: string, body: Object): Observable<Response> {
    this.error.clearError();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.getTocket(),
    });

    return this.http
      .put(this.base_url + url, JSON.stringify(body), { headers: headers })
      .map((response: Response) => {
        return response;
      })
      .catch((error: any) => this.httpErrorHandler(error));
  }

  get(url: string): Observable<any> {
    this.error.clearError();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '  + this.auth.acquireTokenRedirect.toString
    });
    return this.http
      .get(this.base_url + url, { headers: headers })
      .map((response: any) => {
        return response;
      });
  }

  delete(url: string): Observable<Response> {
    this.error.clearError();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.getTocket(),
    });
    return this.http
      .delete(this.base_url + url, { headers: headers })
      .map((response: Response) => {
        return response;
      })
      .catch((error: any) => this.httpErrorHandler(error));
  }
}
