import { Observable, of } from 'rxjs';
import { IMasterInterface } from '../models/IMaster.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MastersService {
  public getMasters(): Observable<Array<IMasterInterface>> {
    const baseImageUrl: string = 'assets/images/masters/';

    const masters: Array<IMasterInterface> = [
      {
        fullname: 'Юля Ротарь',
        speciality: 'Стиліст',
        image: `${baseImageUrl}1.png`,
      },
      {
        fullname: 'Наталя Понуляк',
        speciality: 'Адміністратор',
        image: `${baseImageUrl}2.png`,
      },
      {
        fullname: 'Анастасія Дахло',
        speciality: 'Майстер нігтьового сервісу',
        image: `${baseImageUrl}3.png`,
      },
      {
        fullname: 'Наталія Штерн',
        speciality: 'Косметолог',
        image: `${baseImageUrl}4.png`,
      },
      {
        fullname: 'Марина Міщенко',
        speciality: 'Візажист',
        image: `${baseImageUrl}5.png`,
      },
      {
        fullname: 'Ганна Павлова',
        speciality: 'Естетист-масажист',
        image: `${baseImageUrl}6.png`,
      },
    ];

    return of(masters);
  }
}