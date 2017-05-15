import { Injectable } from '@angular/core';
import {
  Http,
  RequestOptionsArgs,
  Headers,
  Response,
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AuthConfig } from './auth-config';

@Injectable()
export class AuthHttp {

  constructor(
    private defaults: AuthConfig,
    private http: Http,
  ) { }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(this.http.get, { url, options });
  }

  post(url: string, body: Object, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(this.http.post, { url, body, options });
  }

  put(url: string, body: Object, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(this.http.put, { url, body, options });
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(this.http.delete, { url, options });
  }

  patch(url: string, body: Object, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(this.http.patch, { url, body, options });
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(this.http.head, { url, options });
  }

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.request(this.http.options, { url, options });
  }

  private request(
    httpMethod: (url: string, body?: Object, options?: RequestOptionsArgs) => Observable<Response>,
    { url, body, options = {} }: { url: string, body?: Object, options?: RequestOptionsArgs }
  ) : Observable<Response> {
    const headers: Headers = this.requestHeaders(options);
    const newOptions: RequestOptionsArgs = { ...options, headers };
    const newArgs = body ? [url, body, newOptions] : [url, newOptions];
    return httpMethod.apply(this.http, newArgs);
  }

  private requestHeaders(requestOptions: RequestOptionsArgs): Headers {
    if (!requestOptions.headers) {
      return this.defaults.getHeaders();
    }
    const requestHeaders = requestOptions.headers;
    return new Headers(Object.assign({}, this.defaults.getHeaders().toJSON(), requestHeaders.toJSON()));
  }
}
