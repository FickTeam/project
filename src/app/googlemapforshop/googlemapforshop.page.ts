import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AccessJOBService } from "../core/services/access-job.service";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
declare var google

@Component({
  selector: 'app-googlemapforshop',
  templateUrl: './googlemapforshop.page.html',
  styleUrls: ['./googlemapforshop.page.scss'],
})
export class GooglemapforshopPage implements OnInit {
  @ViewChild('mapContainer',{static:true}) mapContainer: ElementRef;
  dataUser:any
  constructor
    (public route:ActivatedRoute, 
     public navCtrl: NavController,public accessJOBService:AccessJOBService,private storage:Storage,public router: Router) { 
       this.dataUser =  this.route.snapshot.params.data

}

map:any
dataLatitude:any
dataLongtitude:any
  ngOnInit() {
   let dataParse = JSON.parse(this.dataUser)   
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
    this.storage.get("dataUser").then(data =>{
      this.accessJOBService.updateAccessJOB(JSON.parse(this.dataUser),data)
      this.router.navigate(['device',this.dataUser])

    })

  }

  dismissOrder(){
    this.navCtrl.navigateBack("/order")

  }

  dismissProfilerepairman(){
  this.navCtrl.navigateForward("/profilerepairman")
  }


}
