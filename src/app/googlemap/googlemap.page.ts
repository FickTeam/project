import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.page.html',
  styleUrls: ['./googlemap.page.scss'],
})

export class GooglemapPage implements OnInit {

  constructor(private geolocation: Geolocation) { }
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
 
  saveMarkersToDatabast() {
    const userLatitoud = this.museum.latitude
    const userLongtitoud = this.museum.longitude
  
  }

}
