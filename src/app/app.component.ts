import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

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
    ]),
    trigger('searchGridRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out')
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  isMenuOpen: boolean = false
  isSearchBarOpen: boolean = false
  isSearchGridOpen: boolean = false
  searchText: string = ''

  @ViewChild('searchBar') inputRef!: ElementRef

  constructor(private changeDetector : ChangeDetectorRef) {}

  toggleSearchBar() {
    if (!this.isSearchGridOpen) {
      this.isSearchBarOpen = !this.isSearchBarOpen
      this.changeDetector.detectChanges()
      if (this.isSearchBarOpen) {
        this.inputRef.nativeElement.focus()
      }
    } else {
      this.hideSearchGrid()
    }
  }
 
  onSearchChanges(event: any) {
    const text: string = event.target.value
    if (text.trim()) {
      this.isSearchGridOpen = true
      this.onActivate(undefined)
    } else {
      this.isSearchGridOpen = false
    } 
  }

  hideSearchGrid() {
    if (this.isSearchGridOpen) {
      this.isSearchGridOpen = false
      this.isSearchBarOpen = false
      this.searchText = ''
    }
  }

  close() {
    if(this.isMenuOpen) {
      this.isMenuOpen = false
    }
    if (!this.isSearchGridOpen) {
      if (this.isSearchBarOpen) {
        this.isSearchBarOpen = false
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
    if (!this.isSearchGridOpen) {
      if (this.isSearchBarOpen) {
        this.isSearchBarOpen = false
      }
    }
  }

  onActivate(event: any) {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
