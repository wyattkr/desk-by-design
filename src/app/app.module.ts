import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './hero/hero.component';
import { DeskDescriptionComponent } from './desk-description/desk-description.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DesksComponent } from './desks/desks.component';
import { DeskComponent } from './desk/desk.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
   declarations: [
      AppComponent,
      HeroComponent,
      DeskDescriptionComponent,
      NavbarComponent,
      DesksComponent,
      DeskComponent,
      FooterComponent,
      AboutUsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
