const clicker = document.getElementById('clicker');
// const term = document.getElementById('terminal');
const bitCounter = document.querySelector('.bit-counter > span');

const toasterDiv = document.querySelector('.buy-toaster');
const toasterCounter = document.querySelector('.buy-toaster > span');

const mobileDiv = document.querySelector('.buy-mobile');
const mobileCounter = document.querySelector('.buy-mobile > span');

const computerDiv = document.querySelector('.buy-computer');
const computerCounter = document.querySelector('.buy-computer > span');

const serverDiv = document.querySelector('.buy-server');
const serverCounter = document.querySelector('.buy-server > span');

const supercomputerDiv = document.querySelector('.buy-supercomputer');
const supercomputerCounter = document.querySelector('.buy-supercomputer > span');

const quantumDiv = document.querySelector('.buy-quantum');
const quantumCounter = document.querySelector('.buy-quantum > span');

const structureSpace = document.getElementById('structures');

// objects
const structures = {
  toaster: {
    name: 'toaster',
    baseGen: 1,
    genMultiplier: 1,
    baseCost: 10,
    text: 'Who knew we\'d ever need internet connected toasters?',
    currOwned: 0,
  },
  mobile: {
    name: 'mobile',
    baseGen: 10,
    genMultiplier: 1,
    baseCost: 1000,
    text: 'Ring ring, who\'s there?',
    currOwned: 0,
  },
  computer: {
    name: 'computer',
    baseGen: 100,
    genMultiplier: 1,
    baseCost: 10000,
    text: 'Another computer to your collection.',
    currOwned: 0,
  },
  server: {
    name: 'server',
    baseGen: 1000,
    genMultiplier: 1,
    baseCost: 100000,
    text: 'LOREM IPSUM THINK OF SOMETHING DOLOR AMET',
    currOwned: 0,
  },
  supercomputer: {
    name: 'supercomputer',
    baseGen: 10000,
    genMultiplier: 1,
    baseCost: 10000000,
    text: 'Like Auntie, but its hashes are binary.',
    currOwned: 0,
  },
  quantum: {
    name: 'quantum',
    baseGen: 1000000,
    genMultiplier: 1,
    baseCost: 100000000,
    text: 'They do exist! You just couldn\'t possibly afford one before.',
    currOwned: 0,
  },
};


const player = {
  bits: 0,
  structures: [],
};


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
    let counter = 0;
    switch (structures[structure].name) {
      case 'toaster':
        counter = Number(toasterCounter.innerText);
        counter += 1;
        toasterCounter.innerText = counter;
        break;
      case 'mobile':
        counter = Number(mobileCounter.innerText);
        counter += 1;
        mobileCounter.innerText = counter;
        break;
      case 'computer':
        counter = Number(computerCounter.innerText);
        counter += 1;
        computerCounter.innerText = counter;
        break;
      case 'server':
        counter = Number(serverCounter.innerText);
        counter += 1;
        serverCounter.innerText = counter;
        break;
      case 'supercomputer':
        counter = Number(supercomputerCounter.innerText);
        counter += 1;
        supercomputerCounter.innerText = counter;
        break;
      case 'quantum':
        counter = Number(quantumCounter.innerText);
        counter += 1;
        quantumCounter.innerText = counter;
        break;
      default:
        break;
    }
  } else {
    alert('You lack the sufficient funds');
  }
};

const passiveBitGeneration = () => {
  player.structures.forEach((structure) => {
    addBits((structure.baseGen * structure.genMultiplier));
  });
};

const startGame = () => {
  passiveBitGeneration();
};

// Event listeners
clicker.addEventListener('click', e => addBits(1));
toasterDiv.addEventListener('click', e => addNewStructure('toaster'));
mobileDiv.addEventListener('click', e => addNewStructure('mobile'));
computerDiv.addEventListener('click', e => addNewStructure('computer'));
serverDiv.addEventListener('click', e => addNewStructure('server'));
supercomputerDiv.addEventListener('click', e => addNewStructure('supercomputer'));
quantumDiv.addEventListener('click', e => addNewStructure('quantum'));

window.onload = () => setInterval(startGame, 1000);
