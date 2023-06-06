import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._raceCount += 1;
    this._maxLifePoints = 99;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._raceCount;
  }
}

export default Elf;