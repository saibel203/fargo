import { Component, Input } from '@angular/core';
import { IMasterInterface } from '../models/IMaster.interface';

@Component({
  selector: 'app-master-item',
  templateUrl: './master-item.component.html',
  styleUrl: './master-item.component.scss',
  standalone: true,
  imports: [],
})
export class MasterItemComponent {
  @Input() master!: IMasterInterface;
}