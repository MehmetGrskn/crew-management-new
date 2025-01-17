import { Injectable } from '@angular/core';
import { CREW_DATA } from '../data/crew-data'; // Import the crew data

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private storageKey = 'crewData';
  
  getCrewData() {
    console.log(CREW_DATA);  // Access CREW_DATA directly
    return CREW_DATA;
  }

  constructor() { }

  addCrew(newCrew: any): void {
    const newId = CREW_DATA.length + 1;  // Use CREW_DATA directly
    newCrew.id = newId;  // Ensure the new crew has a unique ID
    CREW_DATA.push(newCrew);  // Add new crew to CREW_DATA
  }
}
  