# Angular2 HTTP Auth

> Angular2+ authenticated HTTP requests (no JWT required).

Inspired by [angular2-jwt](https://github.com/auth0/angular2-jwt)

## Install

```
npm install angular2-http-auth
```

## Usage

**auth-http.module.ts**

This is the configuration file. You can pass it default fixed headers as well as dynamic headers (such as the authorization token).

Make sure to import this module prior doing any authenticated HTTP call.

`app.module.ts` is often a good place to import it.

```
export function authHttpServiceFactory(
  http: Http,
  theLoggedInService: TheLoggedInService,
) {
  return new AuthHttp(new AuthConfig({
    headers: {
      'Content-Type': 'application/json',
      Authorization: () => theLoggedInService.authorizationKey,
    },
  }), http);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, AuthStorageService]
    }
  ]
})
export class AuthHttpModule { }
```

*It is very similar to [angular2-jwt](https://github.com/auth0/angular2-jwt)'s, even though some parameters might be different.*

user-panel.service.ts

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