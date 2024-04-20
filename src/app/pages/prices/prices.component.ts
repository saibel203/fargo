import { Component, OnInit } from '@angular/core';
import { PricesStateService } from './services/prices-state.service';
import { IPriceItem } from './models/IPriceItem.interface';
import { takeUntil } from 'rxjs';
import { DestroyableComponent } from '../../shared/metadata/destroyable.component';
import { PricesDetailsComponent } from './prices-details/prices-details.component';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
  standalone: true,
  imports: [
    PricesDetailsComponent,
  ],
})
export class PricesComponent extends DestroyableComponent implements OnInit {
  public prices: IPriceItem[] = new Array()

  constructor(
    private pricesStateService: PricesStateService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscribeToChanges();
  }

  private subscribeToChanges(): void {
    this.pricesStateService.prices$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((prices: IPriceItem[]) => {
      this.prices = prices;
    });
  }
}