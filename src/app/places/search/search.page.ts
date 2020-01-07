import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from 'src/app/model/place';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  loadedPlaces: Place[];

  constructor(
    private placesSrv: PlacesService,
    private menuCtrl: MenuController
    ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesSrv.getPlaces();
  }
}
