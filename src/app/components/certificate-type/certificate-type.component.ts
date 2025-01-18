import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CertificateService } from '../../services/certificate-type.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-certificate-type',
  templateUrl: './certificate-type.component.html',
  styleUrls: ['./certificate-type.component.scss'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    TranslateModule
  ]
})
export class CertificateTypeComponent {
  certificateTypeList = new MatTableDataSource<{ name: string; description: string }>([]);

  certificateType = {
    name: '',
    description: ''
  };

  constructor(private certificateService: CertificateService, private router: Router) {}

  onSubmit(): void {
    // Yeni öğeyi listeye ekle
    const newCertificate = { ...this.certificateType };
    this.certificateTypeList.data = [...this.certificateTypeList.data, newCertificate];

    // Servise gönder (eğer gerekiyorsa)
    this.certificateService.addCertificateType(newCertificate);

    // Formu sıfırla
    this.certificateType = { name: '', description: '' };
  }
}