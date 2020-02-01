interface IPeople {
  'birth_year': string;
  'eye_color': string;
  'films': Array<string>;
  'gender': string;
  'hair_color': string;
  'height': string;
  'homeworld': string;
  'mass': string;
  'name': string;
  'skin_color': string;
  'created': string;
  'edited': string;
  'species': Array<string>;
  'starships': Array<string>;
  'url': string;
  'vehicles': Array<string>;
}

export class People implements IPeople {

  public birth_year: string;
  public eye_color: string;
  public films: Array<string>;
  public gender: string;
  public hair_color: string;
  public height: string;
  public homeworld: string;
  public mass: string;
  public name: string;
  public skin_color: string;
  public created: string;
  public edited: string;
  public species: Array<string>;
  public starships: Array<string>;
  public url: string;
  public vehicles: Array<string>;

  constructor() {
    // this.firstName = firstName;
  }
  getFullName(): string {
    return `${this.name}`;
  }
}
