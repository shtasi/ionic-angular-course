import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from 'src/app/model/place';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(private offersSrv: PlacesService) { }

  offers: Place[];

  ngOnInit() {
    this.offers = this.offersSrv.getPlaces();
  }

}
