import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { Certificate, Crew, UserCertificate, UserCertificateRelation } from '../../models/crew-model';
import { CertificateTypeService } from '../../services/certificate-type.service';
import { MatIconModule } from '@angular/material/icon';
import { CrewService } from '../../services/crew.service';

@Component({
  selector: 'app-crew-edit',
  templateUrl: './crew-edit.component.html',
  styleUrls: ['./crew-edit.component.css'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    TranslateModule,
    MatListModule,
    MatIconModule,
    FormsModule
  ]
})
export class CrewEditComponent {
  editForm: FormGroup;
  certificateType : Certificate= { id: 0, type: '', description: '' };
  crewCertificates: UserCertificate[] = [];

  certificateTypes: Certificate[] = [];
  newCertificateType: Certificate = { id: 0, type: '', description: '' };
  newCertificate: UserCertificateRelation = { certificateId: 0, issueDate: '', expiryDate: ''  }; 
  
  constructor(
    private crewService: CrewService,
    private certificateTypeService: CertificateTypeService,
    private dialogRef: MatDialogRef<CrewEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Gelen tayfa verisini al
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      id: [data.id],
      firstName: [data.firstName, Validators.required],
      lastName: [data.lastName, Validators.required],
      nationality: [data.nationality, Validators.required],
      title: [data.title, Validators.required],
      daysOnBoard: [data.daysOnBoard, [Validators.required, Validators.min(1)]],
      dailyRate: [data.dailyRate, [Validators.required, Validators.min(0)]],
      currency: [data.currency, Validators.required],
      discount: [data.discount, [Validators.required, Validators.min(0), Validators.max(10000)]],
    });
  }

  // TypeScript class içerisinde
  removeCertificate(index: number): void {
    this.crewCertificates.splice(index, 1);
  }

  save(): void {
    if (this.editForm.valid) {
      console.log("crewsertifikası", this.crewCertificates);
      
      const updatedCrewData: Crew = {
        ...this.editForm.value,
        certificateRelations: this.crewCertificates.map(certificate => ({
          certificateId: certificate.certificateId,
          issueDate: certificate.issueDate,
          expiryDate: certificate.expiryDate,
        })),

      };
      this.dialogRef.close(updatedCrewData); // Güncellenmiş verileri gönder
      console.log(updatedCrewData, "updatedCrewData");
      
    }
  }

  addCertificate(): void {
    console.log("newCertificateType", this.newCertificateType.id, "newCertificate", this.newCertificate.issueDate, this.newCertificate.expiryDate);
    
    if (!this.newCertificateType.id || !this.newCertificate.issueDate || !this.newCertificate.expiryDate) {
      alert('All fields must be filled out');
      return;
    }
    
    const newCrewCertificate: UserCertificate = {
      id: this.newCertificateType.id,
      type: this.newCertificateType.type,
      description: this.newCertificateType.description,
      certificateId: this.newCertificateType.id,
      issueDate: this.newCertificate.issueDate,
      expiryDate: this.newCertificate.expiryDate
    };

    this.crewCertificates.push(newCrewCertificate);
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    // Örnek bir sertifika ID'si ile başlatma
    this.crewCertificates = this.crewService.getCertificates(this.data.id);
    this.certificateTypeService.getCertificates().subscribe(certificates => {
      this.certificateTypes = certificates;
    });
  }
  
  loadCertificateType(): void {
    const certificateTypeId = this.editForm.value.certificateTypeId;
    this.certificateTypeService.getCertificateById(certificateTypeId).subscribe(data => {
      if (data) {
        this.certificateType = data;
        console.log(data, "data");
        
      } else {
        this.certificateType = { id: 0, type: '', description: '' };
      }
    });
  }
}
