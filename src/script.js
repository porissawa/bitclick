const clicker = document.getElementById('clicker');
// const term = document.getElementById('terminal');
const bitCounter = document.querySelector('.bit-counter > span');

// market items
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

// market upgrades
const upgradesDiv = document.querySelector('.market-upgrades');
let upgradeItems = document.querySelectorAll('.upgrade-item');

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

const upgrades = {
  toaster: {
    upgrade1: {
      affects: 'toaster',
      name: 'Wifi',
      cost: 1000,
      multiplier: 1.1,
      src: '../assets/imgs/up1.png',
    },
    upgrade2: {
      affects: 'toaster',
      name: 'Mesh capabilities',
      cost: 50000,
      multiplier: 1.5,
      src: '../assets/imgs/up2.png',
    },
  },
  mobile: {
    upgrade1: {
      affects: 'mobile',
      name: 'aaaaa',
      cost: 1000,
      multiplier: 1.1,
      src: '../assets/imgs/up3.png',
    },
    upgrade2: {
      affects: 'mobile',
      name: 'bbbbb',
      cost: 50000,
      multiplier: 1.5,
    },
  },
  computer: {
    upgrade1: {
      affects: 'computer',
      name: 'ccccc',
      cost: 1000,
      multiplier: 1.1,
    },
    upgrade2: {
      affects: 'computer',
      name: 'dddddd',
      cost: 50000,
      multiplier: 1.5,
    },
  },
  server: {
    upgrade1: {
      affects: 'server',
      name: 'eeeee',
      cost: 1000,
      multiplier: 1.1,
    },
    upgrade2: {
      affects: 'server',
      name: 'ffffff',
      cost: 50000,
      multiplier: 1.5,
    },
  },
  supercomputer: {
    upgrade1: {
      affects: 'supercomputer',
      name: 'gggggg',
      cost: 1000,
      multiplier: 1.1,
    },
    upgrade2: {
      affects: 'supercomputer',
      name: 'hhhhhhh',
      cost: 50000,
      multiplier: 1.5,
    },
  },
  quantum: {
    upgrade1: {
      affects: 'quantum',
      name: 'iiiiii',
      cost: 1000,
      multiplier: 1.1,
    },
    upgrade2: {
      affects: 'quantum',
      name: 'jjjjjjj',
      cost: 50000,
      multiplier: 1.5,
    },
  },
};

const player = {
  bits: 0,
  structures: [],
};

// global functions
const addBits = (num) => {
  player.bits += num;
  bitCounter.innerText = player.bits.toFixed(0);
};

const removeBits = (num) => {
  player.bits -= num;
  bitCounter.innerText = player.bits;
};

const addUpgradesToUI = () => {
  const vals = Object.values(upgrades);
  for (let i = 0; i < vals.length; i += 1) {
    for (let j = 0; j < Object.values(vals[i]).length; j += 1) {
      const upImg = document.createElement('img');
      const upgrade = Object.values(vals[i])[j];
      upImg.alt = upgrade.name;
      upImg.src = upgrade.src;
      upImg.className = 'upgrade-item unavailable';
      upImg.setAttribute('data-multiplier', upgrade.multiplier);
      upImg.setAttribute('data-affects', upgrade.affects);
      upgradesDiv.appendChild(upImg);
    }
  }
  upgradeItems = document.querySelectorAll('.upgrade-item');
  return upgradeItems;
};

const addNewStructure = (structure) => {
  const bought = structures[structure];
  if (player.bits >= bought.baseCost) {
    removeBits(bought.baseCost);
    player.structures.push(bought);

    const newCost = structures[structure].baseCost * 1.15;
    structures[structure].baseCost = Number(newCost.toFixed(0));

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

const addNewUpgrade = (upgrade) => {
  upgrade.setAttribute('hidden', true);
  player.structures.forEach((structure) => {
    if (upgrade.getAttribute('data-affects') === structure.name) {
      structure.genMultiplier = Number(upgrade.getAttribute('data-multiplier'));
    }
  });
};

const passiveBitGeneration = () => {
  player.structures.forEach((structure) => {
    addBits((structure.baseGen * structure.genMultiplier));
  });
};

// Event listeners
clicker.addEventListener('click', e => addBits(1));
toasterDiv.addEventListener('click', e => addNewStructure('toaster'));
mobileDiv.addEventListener('click', e => addNewStructure('mobile'));
computerDiv.addEventListener('click', e => addNewStructure('computer'));
serverDiv.addEventListener('click', e => addNewStructure('server'));
supercomputerDiv.addEventListener('click', e => addNewStructure('supercomputer'));
quantumDiv.addEventListener('click', e => addNewStructure('quantum'));
upgradesDiv.addEventListener('click', e => addNewUpgrade(e.target));

window.onload = () => {
  addUpgradesToUI();
  setInterval(passiveBitGeneration, 1000);
};
