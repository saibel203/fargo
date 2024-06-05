import { BehaviorSubject, Observable } from "rxjs";
import { IMasterInterface } from "../models/IMaster.interface";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MastersStateService {
  private _masters$: BehaviorSubject<Array<IMasterInterface>> = new BehaviorSubject<Array<IMasterInterface>>(new Array<IMasterInterface>());
  public masters$: Observable<Array<IMasterInterface>>;

  constructor() {
    this.masters$ = this._masters$.asObservable();
  }

  public setMasters(masters: Array<IMasterInterface>) {
    this._masters$.next(masters);
  }
}