import { Injectable } from '@angular/core';
import { ErrorRes, Error } from './error';

@Injectable({
  providedIn: 'root'
})
export class CommonErrorService {
  error: Error;
  constructor() { }

  setError(err: ErrorRes) {
    this.error.status = err.status;
    this.error.statusText = err.statusText;
    const msgData = JSON.parse(err._body);
    // this.error.body = msgData.exceptionDetail.innerExceptionMessage;
    this.error.body = msgData.Message;
  }

  getError() {
    return this.error;
  }

  clearError() {
    this.error = new Error();
  }
}
