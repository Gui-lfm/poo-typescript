abstract class Race {
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
    throw new Error('Not implemented');
    // Race.racesInstancesCount += 1;
    // return Race.racesInstancesCount;
  }

  abstract get maxLifePoints():number;
}

export default Race;