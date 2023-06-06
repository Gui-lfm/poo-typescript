import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._raceCount += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._raceCount;
  }
}

export default Orc;