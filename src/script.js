const clicker = document.getElementById('clicker');
const term = document.getElementById('terminal');
const bitCounter = document.querySelector('.bit-counter > span');
const toasterDiv = document.querySelector('.buy-toaster');
const toasterCounter = document.querySelector('.buy-toaster > span');
const mobileCounter = document.querySelector('.buy-mobile > span');
const computerCounter = document.querySelector('.buy-computer > span');
const serverCounter = document.querySelector('.buy-server > span');
const supercomputerCounter = document.querySelector('.buy-supercomputer > span');
const quantumCounter = document.querySelector('.buy-quantum > span');
const structureSpace = document.getElementById('structures');

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
    this.structures = [];
  }

  // addStructure(structure) {
  //   this.bits -= structure.baseCost;
  //   this.structures.push(structure);
  //   switch (structure.name) {
  //     case 'toaster':
  //       toasterCounter.innerText += 1;
  //       structureSpace.appendChild(addNewStructure(toaster));
  //       break;
  //     case 'mobile':
  //       mobileCounter.innerText += 1;
  //       break;
  //     default:
  //       break;
  //   }
  // }
}

class Structure {
  constructor(baseGen, baseCost) {
    this.baseGen = baseGen;
    this.baseCost = baseCost;
    this.units = 0;
    this.hasGenerated = 0;
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

const addNewStructure = (structure) => {
  const bought = structures[structure];
  if (player.bits >= bought.baseCost) {
    removeBits(bought.baseCost);
    player.structures.push(bought);

    // add to structures visible on right side
    const newStructure = document.createElement('span');
    newStructure.innerHTML = `${bought.name}`;
    structureSpace.appendChild(newStructure);

    // add to structure counter
    // must make it general.
    let counter = Number(toasterCounter.innerText);
    counter += 1;
    toasterCounter.innerText = counter;
  } else {
    alert('You lack the sufficient funds');
  }
};

// Event listeners
clicker.addEventListener('click', e => addBits(1));
toasterDiv.addEventListener('click', e => addNewStructure('toaster'));
