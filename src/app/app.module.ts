import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    MainMenuComponent,
    ProductListComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
