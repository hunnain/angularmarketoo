import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { MsalService } from "@azure/msal-angular";
import { CommonErrorService } from './error/common-error.service';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly _http: HttpClient;

  constructor(public error: CommonErrorService,
    // public auth: MsalService,
    private http: HttpClient) { }

  httpErrorHandler(error: any) {
    if (error.status === 403 || error.status === 500 || error.status === 400) {
      this.error.setError(error);
    } else if (error.status === 401) {
      //   this._auth.signout();
    }
    return Observable.throw(new Error(error));
  }

  post(url: string, body: Object): Observable<Response> {
    this.error.clearError();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' // + this.userData.getToken()
    });
    return this.http
      .post(url, JSON.stringify(body), { headers: headers })
      .map((response: Response) => {
        return response;
      }).catch((error: any) => this.httpErrorHandler(error));
  }


  put(url: string, body: Object): Observable<Response> {
    this.error.clearError();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' // + this.userData.getToken()
    });

    return this.http
      .put(url, JSON.stringify(body), { headers: headers })
      .map((response: Response) => {
        return response;
      }).catch((error: any) => this.httpErrorHandler(error));
  }

  get(url: string): Observable<any> {
    this.error.clearError();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '  + this.auth.acquireTokenRedirect.toString
    });
    return this.http
      .get(url, { headers: headers })
      .map((response: any) => {
        return response;
      })
  }

  delete(url: string): Observable<Response> {
    this.error.clearError();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' // + this.userData.getToken()
    });
    return this.http
      .delete(url, { headers: headers }).map((response: Response) => {
        return response;
      }).catch((error: any) => this.httpErrorHandler(error));
  }
}
