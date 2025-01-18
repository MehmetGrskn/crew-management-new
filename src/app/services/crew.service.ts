import { Injectable } from '@angular/core';
import { Certificate, Crew } from '../models/crew-model';
import { CREW_DATA } from '../data/crew-data';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private storageKey = 'crewDData';

  constructor() {
    // Initialize localStorage with CREW_DATA if not already present
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(CREW_DATA));
    }
  }
  getCrewData(): Crew[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addCrew(newCrew: Crew): void {
    const crewData = this.getCrewData();
    const newId = crewData.length ? Math.max(...crewData.map(c => c.id)) + 1 : 1;
    newCrew.id = newId;
    crewData.push(newCrew);
    localStorage.setItem(this.storageKey, JSON.stringify(crewData));
  }

  deleteCrew(crewId: number): void {
    let crewData = this.getCrewData();
    crewData = crewData.filter(crew => crew.id !== crewId);
    localStorage.setItem(this.storageKey, JSON.stringify(crewData));
  }

  updateCrew(updatedCrew: Crew): void {
    let crewData = this.getCrewData();
    const index = crewData.findIndex(crew => crew.id === updatedCrew.id);
    if (index !== -1) {
      crewData[index] = updatedCrew;
      localStorage.setItem(this.storageKey, JSON.stringify(crewData));
    }
  }

  updateDiscount(crewId: number, discount: number): void {
    let crewData = this.getCrewData();
    const index = crewData.findIndex(crew => crew.id === crewId);
    console.log('crewid', crewId, 'discount', discount);
    
    if (index !== -1) {
      crewData[index].discount = discount;
      localStorage.setItem(this.storageKey, JSON.stringify(crewData));
    }
  }
}