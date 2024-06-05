import { Component, OnInit } from '@angular/core';
import { DiscountItemComponent } from './discount-item/discount-item.component';
import { IDiscountItem } from './models/IDiscountItem.interface';
import { AsyncPipe } from '@angular/common';
import { DiscountsService } from './services/discounts.service';
import { DiscountsStateService } from './services/discounts-state.service';
import { DestroyableComponent } from '../../shared/metadata/destroyable.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.scss',
  standalone: true,
  imports: [
    DiscountItemComponent,
    AsyncPipe,
  ],
})
export class DiscountsComponent extends DestroyableComponent implements OnInit {
  public discounts$ = this.discountsStateService.discounts$;

  constructor(
    private discountsService: DiscountsService,
    private discountsStateService: DiscountsStateService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.getDiscounts();
  }

  private getDiscounts(): void {
    this.discountsService.getDiscounts()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((discounts: Array<IDiscountItem>) => {
        this.discountsStateService.setDiscounts(discounts);
      });
  }
}