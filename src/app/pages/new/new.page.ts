import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Geolocation } from '@capacitor/geolocation';

import {Art} from '../../../models/art';
import { ArtService } from '../../services/art.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  art = new Art()
  address;
  errorMessage

  constructor(private artService: ArtService, private router: Router, private geocoder: NativeGeocoder) {}

  ngOnInit() {
    // this.prefillCity()
  }

  prefillCity() { // android studio : test impossible => "google play services unavailable", pas le temps de debug
    Geolocation.watchPosition({enableHighAccuracy: true}, async (resp, err) => {
      if(!err) { 
        const results = await this.geocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
        console.log(results)
      } else {
        this.errorMessage = err.message
        console.log(err);
      }
    });
  }

  create() {    
    this.art.createdAt = new Date()
    this.artService.create(this.art).subscribe(() => {
      this.router.navigate(['/arts'])
    })
  }

}
