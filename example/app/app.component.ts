import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Response } from '@angular/http';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  showTip = false;

  constructor(public appService: AppService) { }

  onClickUnauthenticated() {
    this.appService.unauthenticatedCall().subscribe((response: Response) => {});
    this.showTip = true;
  }

  onClickAuthenticated() {
    this.appService.authenticatedCall().subscribe((response: Response) => {});
    this.showTip = true;
  }
}
