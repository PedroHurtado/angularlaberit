import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const URL = new InjectionToken<string>("url")

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide:URL,useValue:"http://localhost:8080"}
  ]
};
