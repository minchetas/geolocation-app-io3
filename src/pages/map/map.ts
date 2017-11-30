import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, LatLng } from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [GoogleMaps]
})
export class MapPage { 

  public map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps: GoogleMaps, private platform: Platform) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage')
    this.loadMap();
  }

  loadMap() {
    this.platform.ready().then( () => {
      //this.googleMaps.isAvailable().then(()=>{
        //let element: HTMLElement = document.getElementById('map');
        //this.map = GoogleMaps.create(element);
        let mapOptions: GoogleMapOptions = {
          camera: {
            target: {
              lat: 43.0741904,  
              lng: -89.3809802
            },
            zoom: 18,
            tilt: 30
          }
        };
        
        this.map = GoogleMaps.create('map', mapOptions);
        
        this.map.one(GoogleMapsEvent.MAP_READY).then((data:any) => {
          console.log('Map is ready!!');
          // Center map
          //let myPosition: LatLng = new LatLng(41.390295, 2.154007);
          //this.map.animateCamera({target: myPosition, zoom: 10});          
        })
      //}).catch( () => alert("GoogleMap is not available"));
    })  
  }
}
