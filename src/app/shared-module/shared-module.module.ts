import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PlanetVCardComponent } from '../shared/planet-vcard/planet-vcard.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
    FooterComponent,
    PlanetVCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
    FooterComponent,
    PlanetVCardComponent
  ]
})
export class SharedModuleModule { }
