import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DescripcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html',
})
export class DescripcionPage {

  datos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("desde la pagina de descripcion");
    console.log(this.navParams.get('data'));
    this.datos=this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescripcionPage');
    
  }

  cerrar(){
    this.navCtrl.pop();
  }

}
