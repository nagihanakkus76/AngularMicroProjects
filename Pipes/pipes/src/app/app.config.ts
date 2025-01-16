import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import localeTr from '@angular/common/locales/tr';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeTr);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),{ provide: LOCALE_ID, useValue: 'tr' }]
};
