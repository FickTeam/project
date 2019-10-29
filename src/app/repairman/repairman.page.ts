import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-repairman',
  templateUrl: './repairman.page.html',
  styleUrls: ['./repairman.page.scss'],
})
export class RepairmanPage implements OnInit {
 name:any
 idCar:any
 breakDown :any
 refuel:any
  constructor(public route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    let data = this.route.snapshot.params
    this.idCar = data.data
    this.breakDown = data.data1
    this.refuel = data.data3
    console.log(this.route.snapshot.params);
    
  }

}
