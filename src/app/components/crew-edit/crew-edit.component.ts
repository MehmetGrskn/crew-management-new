import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-crew-edit',
  templateUrl: './crew-edit.component.html',
  styleUrls: ['./crew-edit.component.css'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class CrewEditComponent {
  editForm: FormGroup;

  constructor(
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
    });
  }

  save(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value); // Değişiklikleri gönder
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
