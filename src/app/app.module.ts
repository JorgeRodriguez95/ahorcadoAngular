import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FiguraComponent } from './components/figura/figura.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    FiguraComponent,
    EstadisticasComponent,
    TituloComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
