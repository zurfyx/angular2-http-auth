import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthHttpModule } from './auth-http.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AuthHttpModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
