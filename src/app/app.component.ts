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
    ])
  ]
})
export class AppComponent {
  isMenuOpen: boolean = false
  isSearchBarOpen: boolean = false

  @ViewChild('searchBar') inputRef!: ElementRef

  constructor(private changeDetector : ChangeDetectorRef) {}

  toggleSearchBar() {
    this.isSearchBarOpen = !this.isSearchBarOpen
    this.changeDetector.detectChanges()
    if (this.isSearchBarOpen) {
      this.inputRef.nativeElement.focus()
    }
  }

  search(event: any) {
    console.log(event.target.value)
  }

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

  onActivate(event: any) {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
