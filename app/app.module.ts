import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule, Apollo } from 'apollo-angular';

import { appsyncClient } from './aws';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ApolloModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(apollo: Apollo) {
    apollo.setClient(appsyncClient);
  }

}
