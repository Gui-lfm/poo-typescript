abstract class Race {
  static racesInstancesCount = 0;

  constructor(
    private readonly _name: string, 
    private readonly _dexterity: number,
  ) {
    Race.createdRacesInstances();
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances():number {
    Race.racesInstancesCount += 1;
    throw new Error('Not implemented');
    // return Race.racesInstancesCount;
  }

  abstract get maxLifePoints():number;
}

export default Race;