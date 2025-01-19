import { Injectable } from '@angular/core';
import { CREW_DATA } from '../data/crew-data';
import { Certificate, Crew, UserCertificate, UserCertificateRelation } from '../models/crew-model';
import { CertificateTypeService } from './certificate-type.service';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private storageKey = 'crewData';

  constructor(private certificateTypeService: CertificateTypeService) {
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

  getCertificates(crewId: number): UserCertificate[] {
    const crewData = this.getCrewData();
    const crew = crewData.find(crew => crew.id === crewId);
    const certRelations = crew?.certificateRelations ?? [];
    const certificateTypeObservables = this.certificateTypeService.getCertificates();
    const certificateTypes: Certificate[] = [];
    certificateTypeObservables.subscribe(certificates => {
      certificateTypes.push(...certificates);
    });
    return certRelations.map(certRelation => {
      const certificateType = certificateTypes.find(certType => {
        
        return certType.id === certRelation.certificateId;
      });
    
      return {
        id: certRelation.certificateId,
        type: certificateType?.type || '',
        description: certificateType?.description || '',
        certificateId: certRelation.certificateId,
        issueDate: certRelation.issueDate,
        expiryDate: certRelation.expiryDate
      };
    });
  }

  assignCertificate(crewId: number, certificate: UserCertificateRelation): void {
    let crewData = this.getCrewData();
    const index = crewData.findIndex(crew => crew.id === crewId);
    if (index !== -1) {
      crewData[index].certificateRelations.push(certificate);
      localStorage.setItem(this.storageKey, JSON.stringify(crewData));
    }
  }

  removeCertificateWhereExists(certificateId: number): void {
    let crewData = this.getCrewData();
    crewData.forEach(crew => {
      crew.certificateRelations = crew.certificateRelations.filter(cert => cert.certificateId !== certificateId);
    });
    localStorage.setItem(this.storageKey, JSON.stringify(crewData));
  }

  removeCertificate(crewId: number, certificateId: number): void {
    let crewData = this.getCrewData();
    const crewIndex = crewData.findIndex(crew => crew.id === crewId);
    if (crewIndex !== -1) {
      crewData[crewIndex].certificateRelations = crewData[crewIndex].certificateRelations.filter(cert => cert.certificateId !== certificateId);
      localStorage.setItem(this.storageKey, JSON.stringify(crewData));
    }
  }

  updateCertificate(crewId: number, updatedCertificate: UserCertificateRelation): void {
    let crewData = this.getCrewData();
    const crewIndex = crewData.findIndex(crew => crew.id === crewId);
    if (crewIndex !== -1) {
      const certIndex = crewData[crewIndex].certificateRelations.findIndex(cert => cert.certificateId === updatedCertificate.certificateId);
      if (certIndex !== -1) {
        crewData[crewIndex].certificateRelations[certIndex] = updatedCertificate;
        localStorage.setItem(this.storageKey, JSON.stringify(crewData));
      }
    }
  }
}