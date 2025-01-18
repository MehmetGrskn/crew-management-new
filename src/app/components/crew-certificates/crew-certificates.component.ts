import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crew-certificates',
  templateUrl: './crew-certificates.component.html',
  styleUrls: ['./crew-certificates.component.css'],
  imports: [
    MatTableModule,
    MatDialogModule,
    CommonModule
  ]
})
export class CrewCertificatesDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
