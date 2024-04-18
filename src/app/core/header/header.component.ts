import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  @ViewChild('headerList') headerList!: ElementRef<HTMLUListElement>;
  @ViewChild('bodyOverlay') bodyOverlay!: ElementRef<HTMLDivElement>;
  @ViewChild('closeButton') closeButton!: ElementRef<HTMLButtonElement>;

  public changeToggleBurgerMenu(): void {
    const elements: HTMLCollectionOf<HTMLLIElement> = this.headerList.nativeElement.getElementsByTagName('li');
    const overlay: HTMLDivElement = this.bodyOverlay.nativeElement;
    const body: HTMLBodyElement = document.body as HTMLBodyElement;
    const closeButton: HTMLButtonElement = this.closeButton.nativeElement;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.toggle('hide');
    }

    this.headerList.nativeElement.classList.toggle('list-overlay');
    this.headerList.nativeElement.classList.toggle('overlay');

    closeButton.style.display = (closeButton.style.display === 'block') ? 'none' : 'block';
    overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
    body.style.overflow = (body.style.overflow !== 'hidden') ? 'hidden' : 'auto';
  }
}