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
    OverlayModule
  ]
})
export class CrewAddComponent {
  newCrew = {
    firstName: '',
    lastName: '',
    nationality: '',
    title: '',
    daysOnBoard: 0,
    dailyRate: 0,
    currency: '',
    certificate: {
      type: '',
      issueDate: '',
      expiryDate: ''
    }
  };

  constructor(
    public dialogRef: MatDialogRef<CrewAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private crewService: CrewService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Add new crew to the service
    this.crewService.addCrew(this.newCrew);
    this.dialogRef.close();
  }
}
