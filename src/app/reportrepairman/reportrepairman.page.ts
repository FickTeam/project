import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-reportrepairman',
  templateUrl: './reportrepairman.page.html',
  styleUrls: ['./reportrepairman.page.scss'],
})
export class ReportrepairmanPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  gotodevice() {
    this.navCtrl.navigateBack("/device");

}

}
