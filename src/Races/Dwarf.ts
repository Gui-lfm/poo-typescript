import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._raceCount += 1;
    this._maxLifePoints = 80;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._raceCount;
  }
}

export default Dwarf;