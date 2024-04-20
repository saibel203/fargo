import { Component, Input } from "@angular/core";
import { PriceType } from "../enums/price-type.enum";
import { IPriceItem } from "../models/IPriceItem.interface";

@Component({
  selector: 'app-prices-details',
  templateUrl: './prices-details.component.html',
  styleUrl: './prices-details.component.scss',
  standalone: true,
  imports: [],
})
export class PricesDetailsComponent {
  @Input() imageUrls: string[] = new Array();
  @Input() prices: IPriceItem[] = new Array();

  public priceTypes = [
    PriceType.Hair,
    PriceType.Makeup,
    PriceType.Massage,
  ];
}