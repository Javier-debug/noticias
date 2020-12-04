import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

// Módulo que nos permite hacer peticiones http
import { HttpClientModule } from '@angular/common/http';

// environment
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    //Conecion con un proyecto de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // Modulo de autenticacion con firebase
    AngularFireAuthModule,
    // Modulo para trabajar con la base de datos
    AngularFirestoreModule,
    // Modulo para almacenar archivos
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
