import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  public _energyType: EnergyType = 'stamina';
  static archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Warrior.archetypeCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.archetypeCount;
  }
}

export default Warrior;