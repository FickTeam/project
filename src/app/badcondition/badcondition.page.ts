import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-badcondition',
  templateUrl: './badcondition.page.html',
  styleUrls: ['./badcondition.page.scss'],
})
export class BadconditionPage implements OnInit {
  name:any
  idCar:any
  breakDown :any
  refuel:any
  constructor(public route:ActivatedRoute,public navCtrl: NavController,){
   
  }



  ngOnInit() {
    let data = this.route.snapshot.params
    this.idCar = data.data
    this.breakDown = data.data1
    this.refuel = data.data3
    console.log(this.route.snapshot.params);

  }
  backtocusrequst(){
    this.navCtrl.navigateBack("/cusrequst")
  }
  
  dismissProfilecustomer(){
  this.navCtrl.navigateForward("/profilecustomer")
  }
}
