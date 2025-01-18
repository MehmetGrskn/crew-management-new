import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  CERTIFICATE_TYPES = [
    { name: 'Safety Training', description: 'Mandatory safety course' },
    { name: 'First Aid', description: 'Basic first aid training' },
    { name: 'Firefighting', description: 'Basic firefighting training' },
    { name: 'Medical Care', description: 'Medical care training' },
    { name: 'Security Awareness', description: 'Security awareness training' }
  ];

  getCertificateTypes(): any[] {
    return this.CERTIFICATE_TYPES;
  }

  addCertificateType(type: any): void {
    this.CERTIFICATE_TYPES.push(type);
  }
}
