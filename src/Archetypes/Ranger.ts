import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  public _energyType: EnergyType = 'stamina';
  static archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Ranger.archetypeCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.archetypeCount;
  }
}

export default Ranger;