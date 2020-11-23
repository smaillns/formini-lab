import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SpotService } from 'src/app/Shared/Services/spot.service';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.component.html',
  styleUrls: ['./spot-detail.component.scss']
})
export class SpotDetailComponent implements OnInit {

  constructor(private spotService: SpotService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.spotService.getSpotById(1));
    this.route.data.subscribe(res => console.log(res));
  }

}
