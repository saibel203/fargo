import { Component, OnInit } from '@angular/core';
import { MasterItemComponent } from './master-item/master-item.component';
import { IMasterInterface } from './models/IMaster.interface';
import { MastersService } from './services/masters.service';
import { MastersStateService } from './services/masters-state.service';
import { Observable, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DestroyableComponent } from '../../shared/metadata/destroyable.component';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrl: './masters.component.scss',
  standalone: true,
  imports: [
    MasterItemComponent,
    AsyncPipe,
  ],
})
export class MastersComponent extends DestroyableComponent implements OnInit {
  public masters$: Observable<Array<IMasterInterface>> = this.mastersStateService.masters$;

  constructor(
    private mastersService: MastersService,
    private mastersStateService: MastersStateService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.getMasters();
  }

  private getMasters(): void {
    this.mastersService.getMasters()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((masters: Array<IMasterInterface>) => {
        this.mastersStateService.setMasters(masters);
      });
  }
}