import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthServiceService } from '../service/auth-service/auth-service.service';
import { Observable } from 'rxjs/Observable';
import { CommonService } from '../service/common.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    public auth: AuthServiceService,
    private commonService: CommonService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.commonService.getToken()}`,
      },
    });
    return next.handle(request);
  }
}
