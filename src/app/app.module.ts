import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { EmisorComponent } from './components/emisor/emisor.component';
import { ReceptorComponent } from './components/receptor/receptor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MensajeComponent,
    EmisorComponent,
    ReceptorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
