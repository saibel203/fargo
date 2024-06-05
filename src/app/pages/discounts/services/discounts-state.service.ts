import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IDiscountItem } from "../models/IDiscountItem.interface";

@Injectable({
  providedIn: 'root',
})
export class DiscountsStateService {
  private _discounts$: BehaviorSubject<Array<IDiscountItem>> = new BehaviorSubject<Array<IDiscountItem>>(new Array<IDiscountItem>);
  public discounts$: Observable<Array<IDiscountItem>>;

  constructor() {
    this.discounts$ = this._discounts$.asObservable();
  }

  public setDiscounts(discounts: Array<IDiscountItem>): void {
    this._discounts$.next(discounts);
  }
}