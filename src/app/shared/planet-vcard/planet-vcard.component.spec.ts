import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetVCardComponent } from './planet-vcard.component';

describe('PlanetVCardComponent', () => {
  let component: PlanetVCardComponent;
  let fixture: ComponentFixture<PlanetVCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetVCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetVCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
