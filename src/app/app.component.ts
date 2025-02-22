import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['uz', 'en', 'ru']);
    translate.setDefaultLang('uz');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  get today(): Date {
    return new Date();
  }
  
}
