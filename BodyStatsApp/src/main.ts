import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';
import AppServerModule from './app/app.config.server';
import { environment } from './environments/enviroments';

if (environment.production) {
  enableProdMode();
}

renderModule(AppServerModule, {
  document: '<app-root></app-root>',
  url: '/'
}).then(html => {
  console.log(html);
});