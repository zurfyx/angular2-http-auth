import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class AuthConfig {
  private args: AuthConfigArgs;

  constructor(args: AuthConfigArgs) {
    this.args = args;
  }

  getHeaders(): Headers {
    return new Headers(
      Object.keys(this.args.headers).reduce((acc, curr) => {
        const val = this.args.headers[curr];
        return Object.assign(acc, { [curr]: typeof val === 'function' ? val() : val });
      }, {})
    );
  }
}

export class AuthConfigArgs {
  headers: {[name: string]: (() => string) | string};
}
