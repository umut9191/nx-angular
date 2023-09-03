import { AuthenticationModule } from '@nx-angular/authentication';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,AuthenticationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
