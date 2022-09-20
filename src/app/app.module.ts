import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { SectionComponent } from './section/section.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MenuComponent,
    SectionComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
