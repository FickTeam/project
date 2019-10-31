import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';

declare var google

@Component({
  selector: 'app-googlemapforshop',
  templateUrl: './googlemapforshop.page.html',
  styleUrls: ['./googlemapforshop.page.scss'],
})
export class GooglemapforshopPage implements OnInit {
  @ViewChild('mapContainer',{static:true}) mapContainer: ElementRef;

  constructor() { }
map:any

  ngOnInit() {

    //ใส่ latitude กับ longtitude --------->( latitude , longtitude )
    const latLng = new google.maps.LatLng(14.0015492,100.7170243);  
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
  }

  accessJOB(){
    //กดรับงาน
  }

}
