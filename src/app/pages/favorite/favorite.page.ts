import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  favorites: Array<any>
  errMessage

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
    return this.favoriteService.findAll().subscribe(res => {
      this.favorites = res
    }, err => {
      this.errMessage = JSON.stringify(err.statusText)
    })
  }

}
