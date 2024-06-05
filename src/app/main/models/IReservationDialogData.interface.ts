import { IServiceItem } from "./IServiceItem.interface";

export interface IReservationDialogData {
  times: Array<string>;
  services: Array<IServiceItem>;
}