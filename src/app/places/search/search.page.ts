import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from 'src/app/model/place';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placesSrv: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesSrv.getPlaces();
  }

}
