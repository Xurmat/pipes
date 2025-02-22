import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DateLocalePipe } from "./localizedDate.pipe";


// Languages

import { registerLocaleData } from '@angular/common';


import localeUz from '@angular/common/locales/uz';
import localeRu from '@angular/common/locales/ru';



// register

registerLocaleData(localeUz);
registerLocaleData(localeRu);


export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './i18n/', '.json');
// }


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: httpTranslateLoader,
            deps: [HttpClient]
        }
    }),
    DateLocalePipe
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
