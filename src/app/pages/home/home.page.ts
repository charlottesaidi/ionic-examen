import { Component, OnInit } from '@angular/core';
import { ArtService } from '../../services/art.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  arts: Array<any>
  errMessage

  constructor(private artService: ArtService) {}

  ngOnInit() {
    return this.artService.findLatest(2).subscribe(res => {
      this.arts = res
    }, err => {
      this.errMessage = err.statusText
    })
  }

}
