import { Component, OnInit, Input } from '@angular/core';
import { Plantes } from 'src/app/models/plantes';

@Component({
  selector: 'app-planet-vcard',
  templateUrl: './planet-vcard.component.html',
  styleUrls: ['./planet-vcard.component.scss']
})
export class PlanetVCardComponent implements OnInit {

  @Input() planet: Plantes;

  constructor() { }

  ngOnInit() {
  }

}
