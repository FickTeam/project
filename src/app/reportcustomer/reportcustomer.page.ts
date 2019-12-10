import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-reportcustomer',
  templateUrl: './reportcustomer.page.html',
  styleUrls: ['./reportcustomer.page.scss'],
})
export class ReportcustomerPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertController: AlertController, 
  ) { }

  ngOnInit() {
  }


gotobadcondition() {
  this.navCtrl.navigateBack("/badcondition");
}

}
