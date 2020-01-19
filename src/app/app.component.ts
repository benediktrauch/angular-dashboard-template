import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template';

  headerFixed = true;
  menuOpen = true;
  pushMenu = false;
  overlayMenu = true;
  settingsOpen = false;

  toggleMenuStyle() {
    this.pushMenu = !this.pushMenu;
    this.overlayMenu = !this.pushMenu;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
