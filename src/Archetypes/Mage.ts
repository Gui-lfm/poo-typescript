import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  public _energyType: EnergyType = 'mana';
  static archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Mage.archetypeCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.archetypeCount;
  }
}

export default Mage;