interface IStarships {
  'MGLT': string;
  'cargo_capacity': string;
  'consumables': string;
  'cost_in_credits': string;
  'created': string;
  'crew': string;
  'edited': string;
  'hyperdrive_rating': string;
  'length': string;
  'manufacturer': string;
  'max_atmosphering_speed': string;
  'model': string;
  'name': string;
  'passengers': string;
  'films': Array<string>;
  'pilots': Array<string>;
  'starship_class': string;
  'url': string;
}

export class Starships implements IStarships {
  public MGLT: string;
  public cargo_capacity: string;
  public consumables: string;
  public cost_in_credits: string;
  public created: string;
  public crew: string;
  public edited: string;
  public hyperdrive_rating: string;
  public length: string;
  public manufacturer: string;
  public max_atmosphering_speed: string;
  public model: string;
  public name: string;
  public passengers: string;
  public films: Array<string>;
  public pilots: Array<string>;
  public starship_class: string;
  public url: string;

  constructor() {
    // this.firstName = firstName;
  }
  getName(): string {
    return `${this.name}`;
  }
}
