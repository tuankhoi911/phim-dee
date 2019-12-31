import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client.routing';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NavbarModule
  ]
})
export class ClientModule { }
