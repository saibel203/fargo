import { FormControl } from "@angular/forms";

export interface IReservationForm {
  name: FormControl<string | null>;
  phone: FormControl<string | null>;
  serviceId: FormControl<number | null>;
  time: FormControl<string | null>;
}