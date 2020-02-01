interface IPlantes {
  'climate': string;
  'created': string;
  'diameter': string;
  'edited': string;
  'films': Array<string>;
  'gravity': string;
  'name': string;
  'orbital_period': string;
  'population': string;
  'residents': Array<string>;
  'rotation_period': string;
  'surface_water': string;
  'terrain': string;
  'url': string;
}

export class Plantes implements IPlantes {

  public climate: string;
  public created: string;
  public diameter: string;
  public edited: string;
  public films: Array<string>;
  public gravity: string;
  public name: string;
  public orbital_period: string;
  public population: string;
  public residents: Array<string>;
  public rotation_period: string;
  public surface_water: string;
  public terrain: string;
  public url: string;

  constructor() {
    // this.firstName = firstName;
  }
  getName(): string {
    return `${this.name}`;
  }
}
