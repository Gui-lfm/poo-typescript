import Race from './Race';

class Dwarf extends Race {
  public _maxLifePoints = 80;
  static _raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._raceCount += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._raceCount;
  }
}

export default Dwarf;