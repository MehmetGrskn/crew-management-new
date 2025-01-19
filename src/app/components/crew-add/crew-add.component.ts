import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrewService } from '../../services/crew.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { Crew, Certificate, UserCertificate, UserCertificateRelation } from '../../models/crew-model';
import { TranslateModule } from '@ngx-translate/core';
import { CertificateTypeService } from '../../services/certificate-type.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crew-add',
  templateUrl: './crew-add.component.html',
  styleUrls: ['./crew-add.component.scss'],
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    OverlayModule,
    TranslateModule,
    CommonModule
  ]
})
export class CrewAddComponent {
  newCrew: Crew = {
    id: 0, // id'yi başta 0 verebilirsiniz.
    firstName: '',
    lastName: '',
    title: '',
    nationality: '',
    daysOnBoard: 0, // daysOnBoard alanını ekledik
    dailyRate: 0,
    discount: 0, // Discount alanını ekledik
    currency: '',
    certificateRelations: [] // Sertifikalar dizisini başlatıyoruz
  };

  certificateTypes: Certificate[] = [];
  newCertificateType: Certificate = { id: 0, type: '', description: '' };
  newCertificate: UserCertificateRelation = { certificateId: 0, issueDate: '', expiryDate: ''  }; 

  constructor(
    public dialogRef: MatDialogRef<CrewAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private crewService: CrewService,
    private certificateTypeService: CertificateTypeService
  ) {}

  ngOnInit(): void {
    // Sertifika türlerini al
    const observableCertificates = this.certificateTypeService.getCertificates();
    observableCertificates.subscribe(certificates => {      
      this.certificateTypes = [...certificates];
    });    
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Yeni crew'u servise ekle
    this.crewService.addCrew(this.newCrew);
    this.dialogRef.close();
  }

  addCertificate(): void {
    if (!this.newCertificateType.id || !this.newCertificate.issueDate || !this.newCertificate.expiryDate) {
      alert('All fields must be filled out');
      return;
    }
    
    this.newCrew.certificateRelations.push({ 
      certificateId: this.newCertificateType.id,
      expiryDate: this.newCertificate.expiryDate, 
      issueDate: this.newCertificate.issueDate
    });

     console.log('newCrew', this.newCrew);
     
    // Yeni sertifikayı 'newCrew.certificates' dizisine ekle
    const certificateTypes : Certificate[] = [];
     this.certificateTypeService.getCertificates().subscribe(certificates => {
      certificateTypes.push(...certificates);
    });
    const crewCertificates: UserCertificate[] = this.newCrew.certificateRelations.map(certificate => {
      const certificateType = certificateTypes.find(c => {
      
        console.log('certificate', certificate, 'c', c);
        
        return c.id === certificate.certificateId;
      });

      console.log('certificateType', certificateType);
      
      return {
        id: certificate.certificateId,
        certificateId: certificate.certificateId,
        issueDate: certificate.issueDate,
        expiryDate: certificate.expiryDate,
        type: certificateType?.type ?? '',
        description: certificateType?.description ?? ''
      };
      });
    this.newCrew.certificates = crewCertificates;
    // Sertifika formunu sıfırla
    this.newCertificate = { certificateId: 0, issueDate: '', expiryDate: '' };
    this.newCertificateType = { id: 0, type: '', description: '' };
  }
}
