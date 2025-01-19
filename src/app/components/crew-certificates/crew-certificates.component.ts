import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Crew, UserCertificate } from '../../models/crew-model';

@Component({
  selector: 'app-crew-certificates',
  templateUrl: './crew-certificates.component.html',
  styleUrls: ['./crew-certificates.component.css'],
  imports: [
    MatTableModule,
    MatDialogModule,
    CommonModule,
    TranslateModule
  ]
})
export class CrewCertificatesDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public crew: Crew ) { }
}
