
  
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import {AngularFireAuthModule} from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment.prod';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';



var firebaseConfig: {
  apiKey: "AIzaSyCk1aQs1xispsoqtMJ7ZZdOxkR7IwKKGjc",
  authDomain: "fiks-3d7cf.firebaseapp.com",
  databaseURL: "https://fiks-3d7cf.firebaseio.com",
  projectId: "fiks-3d7cf",
  storageBucket: "fiks-3d7cf.appspot.com",
  messagingSenderId: "597930985217",
  appId: "1:597930985217:web:95e972f7ecac0156"
}



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicStorageModule.forRoot()

  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    Geolocation
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

