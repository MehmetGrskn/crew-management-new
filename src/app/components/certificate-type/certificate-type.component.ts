import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgModule } from '@angular/core'; // Import NgModule
import { CertificateTypeService } from '../../services/certificate-type.service';
import { Certificate } from '../../models/crew-model';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-certificate-type',
  templateUrl: './certificate-type.component.html',
  styleUrls: ['./certificate-type.component.scss'],
  imports: [
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ]
})
export class CertificateTypeComponent implements OnInit {
  certificateType : Certificate= { id: 0, type: '', description: '' };
  certificateTypeList:Certificate[] = [
    
  ];

  constructor(private certificateTypeService: CertificateTypeService) {}

  ngOnInit(): void {
    this.loadCertificateTypes();
  }

  // Mevcut sertifika türlerini yükle
  loadCertificateTypes(): void {
    const certificatesObservables = this.certificateTypeService.getCertificates();
    const certificates: Certificate[] = [];
    certificatesObservables.subscribe(c => {
      certificates.push(...c);
    });
    this.certificateTypeList = certificates;
  }

  // Form gönderimi ve liste güncelleme
  onSubmit(): void {
    if (this.isValidCertificateType(this.certificateType)) {
      this.certificateTypeService.addCertificate({
        ...this.certificateType,
      });
      
      this.resetForm();
      this.loadCertificateTypes();
    } else {
      console.error('Form geçersiz. Lütfen tüm alanları doldurun.');
    }
  }

  // Form doğrulama
  private isValidCertificateType(type: Certificate): boolean {
    return type.type.trim() !== '' && type.description.trim() !== '';
  }

  // Formu sıfırlama
  private resetForm(): void {
    this.certificateType = {id:0, type: '', description: '' };
  }
  
  goHome(): void {
    window.location.href = '/';
  }
}
