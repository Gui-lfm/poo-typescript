import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player1: Fighter) {
    super(player1);
    super.fight();
  }
}

export default PVP;