import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes =  [
  {
    path: 'manager',
    loadChildren: () =>
      import('manager/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'affiliate',
    loadChildren: () =>
      import('affiliate/Module').then((m) => m.RemoteEntryModule),
  },
];


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
