const clicker = document.getElementById('clicker');
const term = document.getElementById('terminal');
const bitCounter = document.querySelector('.bit-counter > span');
const structureSpace = document.querySelector('.structures');


// structures
let structures = {
  toaster: {
    name: 'Toaster',
    baseGen: 0.1,
    baseCost: 10,
    text: 'Who knew we\'d ever need internet connected toasters?',
  },
  mobile: {
    name: 'Cellphone',
    baseGen: 1,
    baseCost: 100,
    text: 'Ring ring, who\'s there?',
  },
  computer: {
    name: 'Computer',
    baseGen: 10,
    baseCost: 1000,
    text: 'Another computer to your collection.',
  },
  server: {
    name: 'Server',
    baseGen: 100,
    baseCost: 10000,
    text: 'LOREM IPSUM THINK OF SOMETHING DOLOR AMET',
  },
  supercomputer: {
    name: 'IBDL-9001',
    baseGen: 1000,
    baseCost: 1000000,
    text: 'Like Auntie, but its hashes are binary.',
  },
  quantum: {
    name: 'Quantum Computer',
    baseGen: 100000,
    baseCost: 10000000,
    text: 'They do exist! You just couldn\'t possibly afford one before.',
  },
};

// class declarations
class Player {
  constructor() {
    this.bits = 0;
  }
}

class Structure {
  constructor(baseGen, baseCost) {
    this.baseGen = baseGen;
    this.baseCost = baseCost;
    this.units = 0;
    this.hasGenerated = 0;
  }
  
  addStructure(structure) {

  }
}

// class instatiations
const player = new Player();


// global functions
const addBits = (num) => {
  player.bits += num;
  bitCounter.innerText = player.bits;
};

const removeBits = (num) => {
  player.bits -= num;
  bitCounter.innerText = player.bits;
};

// Event listeners
clicker.addEventListener('click', e => addBits(1));
