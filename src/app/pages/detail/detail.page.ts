import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArtService } from '../../services/art.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  art: Array<any>
  errMessage

  constructor(private router: Router, private route: ActivatedRoute, private artService: ArtService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    return this.artService.find(id).subscribe(response => {
      this.art = response
    }, err => {
      this.errMessage = JSON.stringify(err.statusText);
      if(err.status === "404") {
        this.router.navigate(['/not-found'])
      }
    })
  }

}
