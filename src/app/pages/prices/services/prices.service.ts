import { Injectable } from '@angular/core';
import { lastValueFrom, of } from 'rxjs';
import { IPriceItem } from '../models/IPriceItem.interface';
import { PriceType } from '../enums/price-type.enum';

@Injectable({
  providedIn: 'root',
})
export class PricesService {
  public getAllPrices(): Promise<IPriceItem[]> {
    const prices: IPriceItem[] = [
      {
        title: 'Жіноча стрижка + укладання',
        price: 3610,
        description: '(Короткі волосся)',
        priceType: PriceType.Hair,
      },
      {
        title: 'Жіноча стрижка + укладання',
        price: 4930,
        description: '(Довгі волосся)',
        priceType: PriceType.Hair,
      },
      {
        title: 'Фарбування',
        price: 2780,
        description: '(1 довжина волосся/2 довжина волосся/3 довжина волосся)',
        priceType: PriceType.Hair,
      },
      {
        title: 'Надання відтінку Luquias',
        price: 3860,
        description: '+ обробка кінчиків волосся',
        priceType: PriceType.Hair,
      },
      {
        title: 'Денний макіяж',
        price: 1200,
        description: 'Косметичні засоби неяскравих поєднань кольорів',
        priceType: PriceType.Makeup,
      },
      {
        title: 'Весільний макіяж',
        price: 1600,
        description: 'Дуже стійкий та практичний макіяж',
        priceType: PriceType.Makeup,
      },
      {
        title: 'Навчальний макіяж',
        price: 2500,
        description: 'Курс, де Ви навчитеся робити макіяж собі легко та із задоволенням!',
        priceType: PriceType.Makeup,
      },
      {
        title: 'Фарбування брів',
        price: 350,
        description: 'Корекція + форма',
        priceType: PriceType.Makeup,
      },
      {
        title: 'Стоун масаж',
        price: 1800,
        description: 'Массаж горячими камнями (90 мин)',
        priceType: PriceType.Massage,
      },
      {
        title: 'Антицелюлітний масаж',
        price: 1200,
        description: 'Ноги, бедра, живот (60 хвилин)',
        priceType: PriceType.Massage,
      },
      {
        title: 'Масаж лиця "Тоффа"',
        price: 1300,
        description: 'Іспанський масаж (50 хвилин)',
        priceType: PriceType.Massage,
      },
      {
        title: 'Тайский массаж',
        price: 1700,
        description: '90 хвилин',
        priceType: PriceType.Massage,
      },
    ];

    return lastValueFrom(
      of(prices)
    );
  }
}