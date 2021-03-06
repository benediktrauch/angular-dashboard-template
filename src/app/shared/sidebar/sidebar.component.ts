import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

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
  @Input() menuData: [];

  settingsOpen = false;

  @Output() toggleMenu = new EventEmitter<boolean>();
  @Output() toggleMenuStyle = new EventEmitter<boolean>();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      // console.log(event);
      if (this.overlayMenu && this.menuOpen) {
        this._toggleMenu();

        // this.toggleMenu.emit(false);
      }
    });
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

  _itemClick() {
    console.log('click');
    if (this.overlayMenu && this.menuOpen) {
      this._toggleMenu();
    }
  }

  logout() {
    this.authService.logout();
  }

}
