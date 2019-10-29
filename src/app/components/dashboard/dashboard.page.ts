import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'ต้องการออกจาระบบหรือไม่!',
      message: '',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            this.authService.logoutUser()
            .then(res => {
              console.log(res);
              this.navCtrl.navigateBack('');
            })
            .catch(error => {
              console.log(error);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  goToLogout() {
    this.presentAlertConfirm()
  }

}
