import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LanguagesService, PagesText } from './services/languages.service';
import { Model, ModelsService } from './services/models.service';

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
  isTranslateOpen: boolean = false
  searchText: string = ''
  searchItems: Model[] = []

  pageText: PagesText | undefined = undefined 

  @ViewChild('searchBar') inputRef!: ElementRef
  @ViewChild('translateList') translateList!: ElementRef
  @ViewChild('translateButton') translateButton!: ElementRef

  constructor(private changeDetector : ChangeDetectorRef, 
              private modelsService: ModelsService, 
              private renderer: Renderer2, 
              private langs: LanguagesService
              ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.isTranslateOpen) {
        if (e.target !== this.translateList.nativeElement && e.target !== this.translateButton.nativeElement) {
          this.isTranslateOpen = false
        }
      }
    })

    this.pageText = this.langs.pagesWrapper
  }

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
      this.searchItems = this.modelsService.getModels(text, 50)
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

  toggleTranslateMenu() {
    this.isTranslateOpen = !this.isTranslateOpen
  }

  translateToUS() {
    this.langs.translateToUS()
    this.pageText = this.langs.pagesWrapper
  }
}
