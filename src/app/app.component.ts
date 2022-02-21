import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('backgroundRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out')
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('menuRemoveTrigger', [
      transition(':enter', [
        style({ transform : 'translateX(100%)' }),
        animate('200ms ease-out')
      ]),
      transition(':leave', [
        animate('200ms', style({ transform : 'translateX(100%)' }))
      ])
    ]),
    trigger('searchBarRemoveTrigger', [
      transition(':enter', [
        style({ transform : 'translateY(-100%)' }),
        animate('200ms ease-out')
      ]),
      transition(':leave', [
        animate('200ms', style({ transform : 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class AppComponent {
  isMenuOpen: boolean = false
  isSearchBarOpen: boolean = false

  close() {
    if (this.isSearchBarOpen) {
      this.isSearchBarOpen = !this.isSearchBarOpen
    }
    if(this.isMenuOpen) {
      this.isMenuOpen = !this.isMenuOpen
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
    if (this.isSearchBarOpen) {
      this.isSearchBarOpen = !this.isSearchBarOpen
    }
  }
}
