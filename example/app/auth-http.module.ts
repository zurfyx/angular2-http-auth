import { NgModule } from '@angular/core';
import { Http } from '@angular/http';

import { AuthHttp, AuthConfig } from '../../src';

export function authHttpServiceFactory(
  http: Http,
) {
  return new AuthHttp(new AuthConfig({
    headers: {
      'Content-Type': 'application/json',
      Authorization: () => 'authorization_code',
    },
  }), http);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http]
    }
  ]
})
export class AuthHttpModule { }
