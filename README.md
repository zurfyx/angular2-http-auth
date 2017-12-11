# Angular HTTP Auth

[![npm Version](https://img.shields.io/npm/v/angular2-http-auth.svg)](https://www.npmjs.com/package/angular2-http-auth)
[![Build Status](https://travis-ci.org/zurfyx/angular2-http-auth.svg?branch=master)](https://travis-ci.org/zurfyx/angular2-http-auth)

> Angular authenticated HTTP requests (no JWT required).

Inspired by [angular2-jwt](https://github.com/auth0/angular2-jwt)

## Install

```
npm install angular2-http-auth
```

## Usage

[auth-http.module.ts](https://github.com/zurfyx/angular2-http-auth/blob/master/example/app/auth-http.module.ts)

This is the configuration file. You can pass it default fixed headers as well as dynamic headers (such as the authorization token).

Make sure to import this module prior doing any authenticated HTTP call.

`app.module.ts` is often a good place to import it.

```
import { AuthHttp, AuthConfig } from 'angular2-http-auth';

export function authHttpServiceFactory(
  http: Http,
  tokenIsHereService: OptionalServiceThatProvidesTheAuthorizationToken,
) {
  return new AuthHttp(new AuthConfig({
    headers: {
      'Content-Type': 'application/json',
      Authorization: () => tokenIsHereService.authorizationKey,
    },
  }), http);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, OptionalServiceThatProvidesTheAuthorizationToken]
    }
  ]
})
export class AuthHttpModule { }
```

*It is very similar to [angular2-jwt](https://github.com/auth0/angular2-jwt)'s, even though some parameters might be different.*

[app.module.ts](https://github.com/zurfyx/angular2-http-auth/blob/master/example/app/app.module.ts)

```
import { HttpModule } from '@angular/http';
import { AuthHttpModule } from './auth-http.module';

@NgModule({
  imports: [
    ...
    HttpModule,
    AuthHttpModule,
    ...
  ],
```

[my-user-panel.service.ts](https://github.com/zurfyx/angular2-http-auth/blob/master/example/app/app.service.ts)

```
import { AuthHttp } from 'angular2-http-auth';
...
fetchPrivateStuff(): Observable<Response> {
  return this.authHttp.post(`https://my-site.com/privateStuff`, {});
}
```

## TODO

* <strike>Default headers</strike>
* Default search params
* Default body
* withCredentials (cookies)

## License

MIT © [Gerard Rovira Sánchez](//zurfyx.com)