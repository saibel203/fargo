import { Injectable } from "@angular/core";
import { PricesService } from "./prices.service";
import { BehaviorSubject } from "rxjs";
import { IPriceItem } from "../models/IPriceItem.interface";

@Injectable({
  providedIn: "root",
})
export class PricesStateService {
  private _prices$ = new BehaviorSubject<IPriceItem[]>(new Array());

  public prices$ = this._prices$.asObservable();

  constructor(
    private pricesService: PricesService,
  ) { 
    this.getPrices();
  }

  private async getPrices(): Promise<void> {
    const prices: IPriceItem[] = await this.pricesService.getAllPrices();

    this._prices$.next(prices);
  }
}