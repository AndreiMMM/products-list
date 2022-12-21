// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './app.component';
import * as featuresComponents from './features/public.features';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';

const appComponents = [AppComponent, featuresComponents.LayoutPageComponent];

@NgModule({
  declarations: [...appComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
