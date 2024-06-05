import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IServiceItem } from '../models/IServiceItem.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesStateService {
  private _services$: BehaviorSubject<Array<IServiceItem>> = new BehaviorSubject<Array<IServiceItem>>(new Array<IServiceItem>());
  public services$: Observable<Array<IServiceItem>>;

  private _serviceTimes$: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(new Array<string>());
  public serviceTimes$: Observable<Array<string>>;

  constructor() {
    this.services$ = this._services$.asObservable();
    this.serviceTimes$ = this._serviceTimes$.asObservable();
  }

  public setServices(services: Array<IServiceItem>): void {
    this._services$.next(services);
  }

  public getServices(): Array<IServiceItem> {
    return this._services$.value;
  }

  public setServiceTimes(serviceTimes: Array<string>): void {
    this._serviceTimes$.next(serviceTimes);
  }

  public getServiceTimes(): Array<string> {
    return this._serviceTimes$.value;
  }
}