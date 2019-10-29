import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RepairmanPage } from "../repairman/repairman.page";
import { Navigation } from 'selenium-webdriver';
import { CusrequstsService } from '../services/cusrequst.service'


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
    private cusrequstsService: CusrequstsService
    ) { }

  ngOnInit() {
  }
  buttonFix() {
    this.data = {
      idCar: this.idCar,
      breakDown: this.breakDown,
      refuel: this.refuel,
      ansRadio: this.ansRadio,
      tireChange: this.tireChange
    }

    this.cusrequstsService.updateCusrequsts(this.data)
    this.navCtrl.navigateForward(`/repairman/${this.idCar}/${this.breakDown}/${this.refuel}/${this.ansRadio}/${this.tireChange}`)
  }


}
