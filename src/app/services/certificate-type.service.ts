import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Certificate } from '../models/crew-model';
import { CERT_DATA } from '../data/certificate-data';

@Injectable({
  providedIn: 'root'
})
export class CertificateTypeService {
  private storageKey = 'certificates';

  constructor() {
    // Initialize localStorage with some data if not already present
    if (!localStorage.getItem(this.storageKey)) {
      const initialData: Certificate[] =  CERT_DATA;
      localStorage.setItem(this.storageKey, JSON.stringify(initialData));
    }
  }

  private loadCertificates(): Certificate[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveCertificates(certificates: Certificate[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(certificates));
  }

  getCertificates(): Observable<Certificate[]> {
    const certificates = this.loadCertificates();
    return of(certificates);
  }

  getCertificateById(id: number): Observable<Certificate | undefined> {
    const certificates = this.loadCertificates();
    const certificate = certificates.find(cert => cert.id === id);
    return of(certificate);
  }

  addCertificate(certificate: Certificate): Observable<void> {
    const certificates = this.loadCertificates();
    certificate.id = certificates.length ? Math.max(...certificates.map(c => c.id)) + 1 : 1;
    certificates.push(certificate);
    this.saveCertificates(certificates);
    return of();
  }

  updateCertificate(certificate: Certificate): Observable<void> {
    const certificates = this.loadCertificates();
    const index = certificates.findIndex(cert => cert.id === certificate.id);
    if (index !== -1) {
      certificates[index] = certificate;
      this.saveCertificates(certificates);
    }
    return of();
  }

  deleteCertificate(id: number): Observable<void> {
    let certificates = this.loadCertificates();
    certificates = certificates.filter(cert => cert.id !== id);
    this.saveCertificates(certificates);

    return of();
  }
}