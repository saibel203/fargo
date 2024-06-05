import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IReservationDialogData } from '../models/IReservationDialogData.interface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IReservationForm } from '../models/IReservationForm.interface';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrl: './reservation-dialog.component.scss',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ReservationDialogComponent implements OnInit {
  public form: FormGroup<IReservationForm>;

  constructor(
    formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ReservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: IReservationDialogData,
  ) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      serviceId: [0, Validators.required],
      time: ['', Validators.required],
    });
  }

  public ngOnInit(): void {
    this.dialogRef.backdropClick().subscribe(() => this.close());
    this.validateFormFields(this.form);
  }

  public close(): void {
    this.dialogRef.close({ success: false });
  }

  public reserve(): void {
    this.dialogRef.close({ success: true });
  }

  private validateFormFields(form: FormGroup): void {
    for (const ctrl of Object.keys(form.controls)) {
      form.get(ctrl)?.markAsTouched();
    }
  }
}