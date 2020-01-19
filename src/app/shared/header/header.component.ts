import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { emit } from 'cluster';

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
  @Input() headerFixed: boolean;
  @Input() pushMenu: boolean;
  @Output() toggleMenu = new EventEmitter<boolean>();

  @ViewChild('searchBar', { static: false }) searchBar?: ElementRef<HTMLElement>;

  companyName = 'ninety:6';

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
    if (event.ctrlKey && event.key === '7') {
      this._focusSearch();
    }
  }
}
