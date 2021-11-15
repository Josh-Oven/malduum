// type of vessel for arcana
// each vessel individually effects abilities of arcana. i.e - staff amplifies element effect. Companions get element bonus to damage. Food gives you temporary properties.
import * as materials from './materials';

export {
  Staff,
  Claymore,
  Wand
}

const vesselList = ['weapons', 'food', 'companions', 'object']

class Staff {
  constructor(mats){
    this.name = `Staff of the ${getName(mats)}`
    this.tier = getTier(mats)
    this.bonus = this.tier * 10;
    this.image = "./svg/staff-vine.svg";
  }
}

class Claymore {
  constructor(mats){
    this.name = `Claymore of the ${getName(mats)}`
    this.tier = getTier(mats)
    this.bonus = this.tier * 10;
    this.image = "./svg/claymore-short.svg";
  }
}

class Wand {
  constructor(mats){
    this.name = `Wand of the ${getName(mats)}`
    this.tier = getTier(mats)
    this.bonus = this.tier * 10;
    this.image = "./svg/wand-short.svg";
  }
}

const getTier = (mats) => {
  let total = 0,
  tiers = [0, 0, 0]

  mats.map((mat, i) => {
    tiers[i] = mat.tier
    if(i+1 === mats.length){

      tiers.map((tier, i)=> {
        total += tier;
      })
    }
  })
  return Math.round((total / 3 + Number.EPSILON) * 100) / 100;
}

const getName = (mats) => {
  let name = '';
  let array = []
  let last = true;
  mats.map((mat, i) => {
    let rando = Math.floor(Math.random() * (1 - 3) + 3)
    if(i === 0){
      array.push(mat.primary)
    } else if(i === 1 && rando % 2 === 0){
      array.push(mat.secondary)
      last = false;
    } else if (last === true && i === 2){
      array.push(mat.secondary)
    }
    console.log(rando)
  })
  return `${array[0]} ${array[1]}`
}
