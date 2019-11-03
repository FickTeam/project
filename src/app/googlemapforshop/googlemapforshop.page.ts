import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
declare var google

@Component({
  selector: 'app-googlemapforshop',
  templateUrl: './googlemapforshop.page.html',
  styleUrls: ['./googlemapforshop.page.scss'],
})
export class GooglemapforshopPage implements OnInit {
  @ViewChild('mapContainer',{static:true}) mapContainer: ElementRef;

  constructor
    (public route:ActivatedRoute, 
     public navCtrl: NavController,) { 
}

map:any
dataLatitude:any
dataLongtitude:any
  ngOnInit() {
   let dataUser =  this.route.snapshot.params.data
   let dataParse = JSON.parse(dataUser)
   console.log(dataParse.repairinvoiced.position._lat);
   
    
    
    //ใส่ latitude กับ longtitude --------->( latitude , longtitude )
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
    this.navCtrl.navigateForward("/device")
  }

  dismissOrder(){
    this.navCtrl.navigateBack("/order")

  }

  dismissProfilerepairman(){
  this.navCtrl.navigateForward("/profilerepairman")
  }


}
