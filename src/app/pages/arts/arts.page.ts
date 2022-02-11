import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.page.html',
  styleUrls: ['./arts.page.scss'],
})
export class ArtsPage implements OnInit {
  arts: Array<any>
  errMessage

  constructor(private artService: ArtService) {}

  ngOnInit() {
    return this.artService.findAll().subscribe(res => {
      this.arts = res
    }, err => {
      this.errMessage = JSON.stringify(err.statusText)
    })
  }

}
