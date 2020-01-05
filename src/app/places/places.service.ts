import { Injectable } from '@angular/core';
import { Place } from '../model/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place('1', 'Kreml', 'Moscow centre', 'https://www.tatilbizde.com/turresim/823_b.jpg', 1499),
    new Place('2', 'Isaaiciy', 'Sanct-Petersburg', 'https://sun9-9.userapi.com/c850736/v850736862/17a69f/G8nC_2YsnaU.jpg', 1399),
    new Place('3', 'Kazan', 'Tatarstan capitol',
              'https://chinalogist.ru/sites/default/files/styles/medium/public/news/kazanskiy-kreml-1-1140x641.jpg', 1199),
  ];

  constructor() { }


  getPlaces() {
    return [...this.places];
  }
}
