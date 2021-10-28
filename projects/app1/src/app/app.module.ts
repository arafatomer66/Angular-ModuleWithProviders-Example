import { AngularMaterialModule } from './material.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
