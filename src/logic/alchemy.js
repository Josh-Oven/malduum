// process:
// vessel (already created. has base stats.) -> element -> mana
import * as elements from '../objects/elements';
import * as vessels from '../objects/vessels';
import * as materials from '../objects/materials';
let Staff = vessels.Staff;

export {
  Arcana
}

// intakes element(s), vessel, mana
// outputs new arcana
class Arcana {
  constructor(e, v, m){
    this.element = e;
    this.vessel = v;
    this.tier = v.tier;
    this.bonus = v.bonus;
    this.mana = m;
    this.name = `${e.name} ${v.name}`;
    this.image = v.image;
  }
}
