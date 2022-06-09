import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

import { NavigationComponent } from './navigation/navigation.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

import { AppFeaturesComponent } from './app-features/app-features.component';
import { BasicFeaturesComponent } from './basic-features/basic-features.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { AppBadgeSectionComponent } from './app-badge-section/app-badge-section.component';
import { ConversionFormComponent } from './conversion-form/conversion-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    NavigationComponent,
    TestimonialComponent,
    AppFeaturesComponent,
    BasicFeaturesComponent,
    CallToActionComponent,
    AppBadgeSectionComponent,
    ConversionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
