import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReservationDialogComponent } from './reservation-dialog/reservation-dialog.component';
import { IServiceItem } from './models/IServiceItem.interface';
import { ServicesService } from './services/services.service';
import { ServicesStateService } from './services/services-state.service';
import { Observable, takeUntil } from 'rxjs';
import { DestroyableComponent } from '../shared/metadata/destroyable.component';
import { AsyncPipe } from '@angular/common';
import { ServiceItemComponent } from './service-item/service-item.component';
import { IDialogResponse } from './models/IDialogResponse.interface';
import { IReservationDialogData } from './models/IReservationDialogData.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
  imports: [
    ServiceItemComponent,
    MatButtonModule,
    AsyncPipe,
  ],
})
export class MainComponent extends DestroyableComponent implements OnInit {
  public services$: Observable<Array<IServiceItem>> = this.servicesStateService.services$;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private servicesService: ServicesService,
    private servicesStateService: ServicesStateService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.getServices();
    this.getServiceTimes();
  }

  public openReservationDialog(): void {
    const dialogOptions: MatDialogConfig<IReservationDialogData> = {
      width: '700px',
      data: {
        times: this.servicesStateService.getServiceTimes(),
        services: this.servicesStateService.getServices(),
      }
    };

    this.dialog.open(ReservationDialogComponent, dialogOptions)
      .afterClosed()
      .subscribe((response: IDialogResponse) => {
        if (response.success) {
          this.snackBar.open('Запис пройшов успішно', 'Закрити');
        }
      });
  }

  private getServices(): void {
    this.servicesService.getServices()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((services: Array<IServiceItem>) => {
        this.servicesStateService.setServices(services);
      });
  }

  private getServiceTimes(): void {
    this.servicesService.getServiceTimes()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((serviceTimes: Array<string>) => {
        this.servicesStateService.setServiceTimes(serviceTimes);
      });
  }
}