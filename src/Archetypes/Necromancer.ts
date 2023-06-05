import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  public _energyType: EnergyType = 'mana';
  static archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Necromancer.archetypeCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.archetypeCount;
  }
}

export default Necromancer;