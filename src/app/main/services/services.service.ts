import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IServiceItem } from '../models/IServiceItem.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  public getServices(): Observable<Array<IServiceItem>> {
    const baseImageUrl = 'assets/images/services';

    const services: Array<IServiceItem> = [
      {
        id: 1,
        title: 'Перукарські послуги',
        description: 'Манікюр',
        image: `${baseImageUrl}/image-1.png`,
      },
      {
        id: 2,
        title: 'Манікюр',
        description: '',
        image: `${baseImageUrl}/image-2.png`,
      },
      {
        id: 3,
        title: 'Педикюр',
        description: '',
        image: `${baseImageUrl}/image-3.png`,
      },
      {
        id: 4,
        title: 'Косметологія',
        description: '',
        image: `${baseImageUrl}/image-4.png`,
      },
      {
        id: 5,
        title: 'Естетист по тілу',
        description: '',
        image: `${baseImageUrl}/image-5.png`,
      },
      {
        id: 6,
        title: 'Візаж',
        description: '',
        image: `${baseImageUrl}/image-6.png`,
      },
    ];

    return of(services);
  }

  public getServiceTimes(): Observable<Array<string>> {
    const times: Array<string> = [
      '10:00 - 13:00',
      '13:00 - 15:00',
      '15:00 - 17:00',
      '17:00 - 19:00',
    ];

    return of(times);
  }
}