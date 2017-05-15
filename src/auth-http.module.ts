import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthHttp } from './auth-http';

@NgModule({
  imports: [HttpModule],
  exports: [],
  declarations: [],
  providers: [AuthHttp],
})
export class AuthHttpModule { }
