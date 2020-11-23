import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.scss']
})
export class SpotListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
