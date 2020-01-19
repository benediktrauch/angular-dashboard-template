import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() menuOpen: boolean;
  @Input() headerFixed: boolean;
  @Input() pushMenu: boolean;
  @Input() overlayMenu: boolean;

  settingsOpen = false;

  @Output() toggleMenu = new EventEmitter<boolean>();
  @Output() toggleMenuStyle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  _toggleSettings() {
    this.settingsOpen = !this.settingsOpen;
  }

  _toggleMenuStyle() {
    this.pushMenu = !this.pushMenu;
    // this.overlayMenu = !this.pushMenu;
    this.toggleMenuStyle.emit(this.pushMenu);
  }

  _toggleMenu() {
    this.toggleMenu.emit(this.menuOpen);
  }

}
