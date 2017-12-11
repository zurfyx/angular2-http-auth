import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../../src';

@Injectable()
export class AppService {

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) { }

  unauthenticatedCall(): Observable<Response> {
    return this.http.get(window.location.href);
  }

  authenticatedCall(): Observable<Response> {
    return this.authHttp.get(window.location.href);
  }
}
