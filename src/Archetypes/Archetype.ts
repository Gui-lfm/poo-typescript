import { EnergyType } from '../Energy';

abstract class Archetype {
  private _cost: number;
  private _special: number;
  
  constructor(private _name: string) {
    this._cost = 0;
    this._special = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType():EnergyType;
}

export default Archetype;