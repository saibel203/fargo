import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDiscountItem } from '../models/IDiscountItem.interface';

@Injectable({
  providedIn: 'root',
})
export class DiscountsService {
  public getDiscounts(): Observable<Array<IDiscountItem>> {
    const discounts: Array<IDiscountItem> = [
      
    ];

    return of(discounts);
  }
}