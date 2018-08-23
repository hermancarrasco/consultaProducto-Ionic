import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Diagnostic } from '@ionic-native/diagnostic';
import { ConsultaProvider } from '../../providers/consulta/consulta';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultado:any;

  codigo:string;
  format:string;

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private diagnostic: Diagnostic,
              private toastCtrl:ToastController,
              private _coProv:ConsultaProvider,
              private platform:Platform) {
                
  }

  verificarPermiso(){
    if (this.platform.is("cordova")) {
      this.diagnostic.isCameraAuthorized().then((authorized) => {
        if(authorized)
            this.abrirCamara()
        else {
            this.diagnostic.requestCameraAuthorization().then((status) => {
                if(status == this.diagnostic.permissionStatus.GRANTED)
                    this.abrirCamara();
                else {
                    // Permissions not granted
                    // Therefore, create and present toast
                    this.toastCtrl.create(
                        {
                            message: "No hay acceso a la camara", 
                            position: "bottom",
                            duration: 5000
                        }
                    ).present();
                }
            });
        }
    });
    } else {
      this._coProv.buscarProducto("7800007649126").subscribe(data=>{
          
           console.log("desde home");
         console.log(data);
        this.resultado=data;
        
        this.navCtrl.push("DescripcionPage",{data})
          
        });
    }
  }

  abrirCamara(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.codigo=barcodeData.text;
      //this.escaneados.push(barcodeData.text);
      
      this.format=barcodeData.format;

      if (barcodeData.cancelled) {
        this.codigo="Se canceló el Scan";
      }else{
        //this._coProv.buscarProducto(barcodeData.text);
        this._coProv.buscarProducto(barcodeData.text).subscribe(data=>{
          
        //   console.log("desde home");
        // console.log(data);
        this.resultado=data;
        this.navCtrl.push("DescripcionPage",{data})
          
        });
        
        
      
        //
      }

     }).catch(err => {
         console.log('Error', err);
         this.codigo=err;
     });
     
  }

}
