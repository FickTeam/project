import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RepairmanPage } from "../repairman/repairman.page";
import { Navigation } from 'selenium-webdriver';
import { CusrequstsService } from '../core/services/cusrequst.service'
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google


@Component({
  selector: 'app-cusrequst',
  templateUrl: 'cusrequst.page.html',
  styleUrls: ['cusrequst.page.scss'],
})
export class CusrequstPage implements OnInit {
  idCar: any
  breakDown: any
  refuel: any
  ansRadio: any
  tireChange: any
  data: any
  constructor(
    public navCtrl: NavController,
    private cusrequstsService: CusrequstsService,
    private geolocation: Geolocation ) {
 }
 @ViewChild('mapContainer',{static:true}) mapContainer: ElementRef;
  map: any;
  museum:any

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.museum = resp.coords
      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);  
      const mapOptions = {
        center: latLng,
        disableDefaultUI: true,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapContainer.nativeElement,mapOptions);
      const marker = new google.maps.Marker({
        map: this.map, 
        animation: google.maps.Animation.DROP,
        position: latLng
      });
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
       
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
    }
 
  
  buttonFix() {
    this.data = {
      idCar: this.idCar,
      breakDown: this.breakDown,
      refuel: this.refuel,
      ansRadio: this.ansRadio,
      tireChange: this.tireChange,
      latitude: this.museum.latitude,
      longtitude : this.museum.longtitude
    }

    this.cusrequstsService.updateCusrequsts(this.data)
    this.navCtrl.navigateForward(`/repairman/${this.idCar}/${this.breakDown}/${this.refuel}/${this.ansRadio}/${this.tireChange}`)
  }

  dismissRegister(){
    this.navCtrl.navigateBack("/home")
  }
}

