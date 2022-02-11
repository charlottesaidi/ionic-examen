import { Directive, HostListener, ElementRef } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import {Favorite} from '../../models/favorite';
import { FavoriteService } from '../services/favorite.service';
import { ArtService } from '../services/art.service';

@Directive({
  selector: '[appAddfav]'
})
export class AddfavDirective {
  favorite = new Favorite()
  art: Array<any> 

  constructor(private favoriteService: FavoriteService, private artService: ArtService, private el: ElementRef,public toastController: ToastController, private router: Router) { }
  
  ngOnInit() {
    this.artService.find(this.el.nativeElement.id).subscribe(response => {
      this.favorite = response
    })
  }

  @HostListener('click') addFavorite(){
    this.favoriteService.create(this.favorite).subscribe( async () => {
      const toast = await this.toastController.create({
        message: 'Art ajouté aux favoris',
        duration: 2000,
        color: 'success',
      });
      toast.present();
      this.router.navigate(['/arts'])
    });
  }

}
