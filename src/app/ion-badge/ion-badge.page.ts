import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ion-badge',
  templateUrl: './ion-badge.page.html',
  styleUrls: ['./ion-badge.page.scss'],
})
export class IonBadgePage implements OnInit {

  
  public listItems : any[] = [];
  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.listItems = [
      {
        label:'Followers',
        value:'220k',
        color:''
      },
      {
        label:'Likes',
        value:'118k',
        color:'secondary'
      },
      {
        label:'Stars',
        value:'34k',
        color:'tertiary'
      },
      {
        label:'Completed',
        value:'80',
        color:'success'
      },
      {
        label:'Warnings',
        value:'220',
        color:'warning'
      },
      {
        label:'Notifications',
        value:'22k',
        color:'danger'
      },
      
    ]
  }


  async presentAlert(item) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: item.label,
      message: item.value,
      buttons: ['Bingo!']
    });

    await alert.present();
  }

}
