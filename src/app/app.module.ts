import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from './modules/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingPageComponent } from './containers/loading-page/loading-page.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,

  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
