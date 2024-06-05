import { Component, Input } from '@angular/core';
import { IServiceItem } from '../models/IServiceItem.interface';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss',
  standalone: true,
  imports: [],
})
export class ServiceItemComponent {
  @Input() service!: IServiceItem;
}