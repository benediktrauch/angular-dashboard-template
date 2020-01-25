import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menuOpen: boolean;
  @Input() overlayMenu: boolean;
  @Input() headerFixed: boolean;
  @Output() toggleMenu = new EventEmitter<boolean>();

  // private menuOpenIcon = require('src/assets/icons/menu_open-24px.svg');
  // private menuCloseIcon = require('src/assets/icons/menu-24px.svg');

  @ViewChild('searchBar', { static: false }) searchBar?: ElementRef<HTMLElement>;

  companyName = 'ninety:6';

  user = {
    name: 'User'
  };

  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  _toggleMenu() {
    this.toggleMenu.emit(this.menuOpen);
  }

  _focusSearch() {
    this.searchBar.nativeElement.focus();
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    console.log('event', event);
    if (event.ctrlKey && event.key === '7') {
      this._focusSearch();
    }
    if (event.ctrlKey && event.key === '/') {
      this._focusSearch();
    }
  }
}
