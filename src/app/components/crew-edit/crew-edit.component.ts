import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { Certificate } from '../../models/crew-model';
import { CertificateTypeService } from '../../services/certificate-type.service';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ]
})
export class CrewEditComponent {
  editForm: FormGroup;
  certificateType : Certificate= { id: 0, type: '', description: '' };
  certificateTypeList:Certificate[] = [];

  constructor(
    private certificateTypeService: CertificateTypeService,
    private dialogRef: MatDialogRef<CrewEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Gelen tayfa verisini al
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
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
    this.certificateTypeList.splice(index, 1); // Sertifikayı listeden kaldır
  }

  save(): void {
    if (this.editForm.valid) {
      const updatedCrewData = {
        ...this.editForm.value,
        certificates: this.certificateTypeList, // Sertifikaların güncellenmiş hali
      };
      this.dialogRef.close(updatedCrewData); // Güncellenmiş verileri gönder
    }
  }

  close(): void {
    this.dialogRef.close();
  }

    ngOnInit(): void {
    // Örnek bir sertifika ID'si ile başlatma
    const initialCertificateId = 1;
    this.certificateTypeService.getCertificateById(initialCertificateId).subscribe(data => {
      if (data) {
        this.certificateTypeList = [data];
      } else {
        this.certificateTypeList = [];
      }
    });
    this.loadCertificateType();
    console.log(this.loadCertificateType());
    console.log(this.certificateTypeList);
    
    
  }
  
  loadCertificateType(): void {
    const certificateTypeId = this.editForm.value.certificateTypeId;
    this.certificateTypeService.getCertificateById(certificateTypeId).subscribe(data => {
      if (data) {
        this.certificateType = data;
      } else {
        this.certificateType = { id: 0, type: '', description: '' };
      }
    });
  }
}
