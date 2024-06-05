import { Component, Input } from '@angular/core';
import { IDiscountItem } from '../models/IDiscountItem.interface';

@Component({
  selector: 'app-discount-item',
  templateUrl: './discount-item.component.html',
  styleUrl: './discount-item.component.scss',
  standalone: true,
  imports: [],
})
export class DiscountItemComponent {
  @Input() discount!: IDiscountItem;
}