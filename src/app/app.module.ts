import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Main/app.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { MenuComponent } from './Layouts/menu/menu.component';
import { SidenavMenuComponent } from './Layouts/sidenav-menu/sidenav-menu.component';
import { HomeComponent } from './Pages/home/home.component';
import { APP_CONFIG } from './Shared/config';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidenavMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment.apiEndpointConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
