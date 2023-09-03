import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UiModule } from '@nx-angular/ui';

@NgModule({
  imports: [CommonModule,UiModule],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class AuthenticationModule {}
