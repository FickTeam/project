import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var google

@Component({
  selector: 'app-googlemapforshop',
  templateUrl: './googlemapforshop.page.html',
  styleUrls: ['./googlemapforshop.page.scss'],
})
export class GooglemapforshopPage implements OnInit {
  @ViewChild('mapContainer',{static:true}) mapContainer: ElementRef;

  constructor(public route:ActivatedRoute) { }
map:any
dataLatitude:any
dataLongtitude:any
  ngOnInit() {
   let dataUser =  this.route.snapshot.params.data
   let dataParse = JSON.parse(dataUser)
   console.log(dataParse.repairinvoiced.position._lat);
   
    const latLng = new google.maps.LatLng(dataParse.repairinvoiced.position._lat,dataParse.repairinvoiced.position._long);  
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
