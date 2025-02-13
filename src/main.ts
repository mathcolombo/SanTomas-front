import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, inject } from '@angular/core';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconService } from './app/shared/services/icon.service';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers!,
    importProvidersFrom(FontAwesomeModule)
  ]
}).catch(err => console.error(err));
