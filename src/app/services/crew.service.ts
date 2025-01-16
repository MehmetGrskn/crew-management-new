import { Injectable } from '@angular/core';
import { CREW_DATA } from '../data/crew-data';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  getCrewData(){
    console.log(CREW_DATA)
    return CREW_DATA;
  }
  constructor() { }
}
