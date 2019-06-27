const clicker = document.getElementById('clicker');
const term = document.getElementById('terminal');
const bitCounter = document.querySelector('.bit-counter > span');

// market items
const marketItems = document.querySelector('.market-structures');

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

// objects
const structures = {
  toaster: {
    name: 'toaster',
    baseGen: 1,
    genMultiplier: 1,
    baseCost: 15,
    img: '../assets/imgs/structures_toaster.png',
    currOwned: 0,
  },
  mobile: {
    name: 'mobile',
    baseGen: 8,
    genMultiplier: 1,
    baseCost: 100,
    img: '../assets/imgs/structure_mobile.png',
    currOwned: 0,
  },
  computer: {
    name: 'computer',
    baseGen: 47,
    genMultiplier: 1,
    baseCost: 1100,
    img: '../assets/imgs/structures_computer.png',
    currOwned: 0,
  },
  server: {
    name: 'server',
    baseGen: 260,
    genMultiplier: 1,
    baseCost: 12000,
    img: '../assets/imgs/structures_server.png',
    currOwned: 0,
  },
  supercomputer: {
    name: 'supercomputer',
    baseGen: 1400,
    genMultiplier: 1,
    baseCost: 130000,
    img: '../assets/imgs/structures_supercomputer.png',
    currOwned: 0,
  },
  quantum: {
    name: 'quantum',
    baseGen: 7800,
    genMultiplier: 1,
    baseCost: 1400000,
    img: '../assets/imgs/structures_quantum.png',
    currOwned: 0,
  },
};

// criar upgrades que multiplicam os bits por clique
const upgrades = {
  toaster: {
    upgrade1: {
      affects: 'toaster',
      name: 'Toaster I',
      cost: 100,
      multiplier: 2,
      src: '../assets/imgs/upgrades/azul1.png',
    },
    upgrade2: {
      affects: 'toaster',
      name: 'Toaster II',
      cost: 500,
      multiplier: 4,
      src: '../assets/imgs/upgrades/azul2.png',
    },
    upgrade3: {
      affects: 'toaster',
      name: 'Toaster III',
      cost: 10000,
      multiplier: 8,
      src: '../assets/imgs/upgrades/azul3.png',
    },
    upgrade4: {
      affects: 'toaster',
      name: 'Toaster IV',
      cost: 100000,
      multiplier: 16,
      src: '../assets/imgs/upgrades/azul4.png',
    },
  },
  mobile: {
    upgrade1: {
      affects: 'mobile',
      name: 'Mobile I',
      cost: 1000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/amarela1.png',
    },
    upgrade2: {
      affects: 'mobile',
      name: 'Mobile II',
      cost: 5000,
      multiplier: 4,
      src: '../assets/imgs/upgrades/amarela2.png',
    },
    upgrade3: {
      affects: 'mobile',
      name: 'Mobile III',
      cost: 50000,
      multiplier: 8,
      src: '../assets/imgs/upgrades/amarela3.png',
    },
    upgrade4: {
      affects: 'mobile',
      name: 'Mobile IV',
      cost: 5000000,
      multiplier: 16,
      src: '../assets/imgs/upgrades/amarela4.png',
    },
  },
  computer: {
    upgrade1: {
      affects: 'computer',
      name: 'Computer I',
      cost: 11000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/pedra1.png',
    },
    upgrade2: {
      affects: 'computer',
      name: 'Computer II',
      cost: 55000,
      multiplier: 4,
      src: '../assets/imgs/upgrades/pedra2.png',
    },
    upgrade3: {
      affects: 'computer',
      name: 'Computer III',
      cost: 550000,
      multiplier: 8,
      src: '../assets/imgs/upgrades/pedra3.png',
    },
    upgrade4: {
      affects: 'computer',
      name: 'Computer IV',
      cost: 55000000,
      multiplier: 16,
      src: '../assets/imgs/upgrades/pedra4.png',
    },
  },
  server: {
    upgrade1: {
      affects: 'server',
      name: 'Server I',
      cost: 120000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/rank1.png',
    },
    upgrade2: {
      affects: 'server',
      name: 'Server II',
      cost: 600000,
      multiplier: 4,
      src: '../assets/imgs/upgrades/rank2.png',
    },
    upgrade3: {
      affects: 'server',
      name: 'Server III',
      cost: 6000000,
      multiplier: 8,
      src: '../assets/imgs/upgrades/rank3.png',
    },
    upgrade4: {
      affects: 'server',
      name: 'Server IV',
      cost: 600000000,
      multiplier: 16,
      src: '../assets/imgs/upgrades/rank4.png',
    },
  },
  supercomputer: {
    upgrade1: {
      affects: 'supercomputer',
      name: 'Supercomputer I',
      cost: 1300000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/verde1.png',
    },
    upgrade2: {
      affects: 'supercomputer',
      name: 'Supercomputer II',
      cost: 6500000,
      multiplier: 4,
      src: '../assets/imgs/upgrades/verde2.png',
    },
    upgrade3: {
      affects: 'supercomputer',
      name: 'Supercomputer III',
      cost: 65000000,
      multiplier: 8,
      src: '../assets/imgs/upgrades/verde3.png',
    },
    upgrade4: {
      affects: 'supercomputer',
      name: 'Supercomputer IV',
      cost: 6500000000,
      multiplier: 16,
      src: '../assets/imgs/upgrades/verde4.png',
    },
  },
  quantum: {
    upgrade1: {
      affects: 'quantum',
      name: 'Quantum I',
      cost: 14000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/quantum1.png',
    },
    upgrade2: {
      affects: 'quantum',
      name: 'Quantum II',
      cost: 700000000,
      multiplier: 4,
      src: '../assets/imgs/upgrades/quantum2.png',
    },
    upgrade3: {
      affects: 'quantum',
      name: 'Quantum III',
      cost: 7000000000,
      multiplier: 8,
      src: '../assets/imgs/upgrades/quantum3.png',
    },
    upgrade4: {
      affects: 'quantum',
      name: 'Quantum IV',
      cost: 70000000000,
      multiplier: 16,
      src: '../assets/imgs/upgrades/quantum4.png',
    },
  },
};

const player = {
  bits: 0,
  structures: [],
  clickMultiplier: 1,
};

// global functions
const addBits = (num) => {
  player.bits += num;
  bitCounter.innerText = Math.floor(player.bits.toFixed(0));
};

const removeBits = (num) => {
  player.bits -= num;
  bitCounter.innerText = Math.floor(player.bits.toFixed(0));
};

const titleBits = () => {
  const title = document.querySelector('head > title');
  const { bits } = player;
  const str = String(bits.toFixed(0));
  if (bits > 999999999999) {
    const nmb = str.slice(0, str.length - 12);
    title.innerText = `${nmb}T bits`;
  } else if (bits <= 999999999999 && bits > 999999999) {
    const nmb = str.slice(0, str.length - 9);
    title.innerText = `${nmb}B bits`;
  } else if (bits <= 999999999 && bits >= 1000000) {
    const nmb = str.slice(0, str.length - 6);
    title.innerText = `${nmb}M bits`;
  } else if (bits <= 999999 && bits >= 1000) {
    const nmb = str.slice(0, str.length - 3);
    title.innerText = `${nmb}K bits`;
  } else if (bits < 999) {
    title.innerText = `${bits} bits`;
  }
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
      upImg.setAttribute('data-cost', upgrade.cost);
      upgradesDiv.appendChild(upImg);
    }
  }
  upgradeItems = document.querySelectorAll('.upgrade-item');
  return upgradeItems;
};

const showDetails = (hover) => {
  const infoContainer = document.createElement('div');
  infoContainer.className = 'term-info-container';
  const infoContainerText = document.createElement('p');

  if (hover.attributes.getNamedItem('data-affects') !== null) {
    const name = hover.getAttribute('alt');
    const gens = hover.getAttribute('data-multiplier');
    const cost = hover.getAttribute('data-cost');
    const affects = hover.getAttribute('data-affects');
    const affectsCapitalized = affects.charAt(0).toUpperCase() + affects.slice(1);
    infoContainerText.innerText = `> Upgrade "${name}" costs ${cost} bits and multiplies ${affectsCapitalized} BpS by ${gens}.`;
  } else if (hover.className !== 'market-upgrades') {
    const structureName = hover.getAttribute('data-name');
    const structure = structures[structureName];
    const gens = structure.currOwned * structure.baseGen * structure.genMultiplier;
    const { name, baseCost } = structure;
    infoContainerText.innerText = `> A ${name} generates ${structure.baseGen} bits per second.

    > An additional unit will cost ${baseCost} bits.

    > You currently generate ${gens.toFixed(1)} BpS from them.`;
  }
  infoContainer.append(infoContainerText);
  term.append(infoContainer);
};

const addNewStructure = (structure) => {
  const bought = structures[structure];
  if (player.bits >= bought.baseCost) {
    removeBits(bought.baseCost);
    buyNoise();
    player.structures.push(bought);
    bought.currOwned += 1;

    const newCost = bought.baseCost * 1.15;
    bought.baseCost = Number(newCost.toFixed(0));
    const genClass = `.buy-${bought.name}`;
    const displayNewPrice = document.querySelector(`${genClass} > div > span`);
    displayNewPrice.innerText = bought.baseCost;

    // add to structures visible on right side
    const newStructure = document.createElement('img');
    newStructure.src = `../assets/imgs/structures_${bought.name}.png`;
    const structureSpace = document.querySelector(`.structures-${structures[structure].name}`);
    structureSpace.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    structureSpace.appendChild(newStructure);

    // add to structure counter
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
    showDetails();
  } else {
    failedNoise();
    alert('You lack the sufficient funds');
  }
};

const addNewUpgrade = (upgrade) => {
  if (player.bits >= Number(upgrade.getAttribute('data-cost'))) {
    removeBits(Number(upgrade.getAttribute('data-cost')));
    upgrade.setAttribute('hidden', true);
    buyUpgrade();

    player.structures.forEach((structure) => {
      if (upgrade.getAttribute('data-affects') === structure.name) {
        structure.genMultiplier = Number(upgrade.getAttribute('data-multiplier'));
      }
    });
  } else {
    failedNoise();
    alert(`You lack the sufficient funds.`);
  }
};

const passiveBitGeneration = () => {
  player.structures.forEach((structure) => {
    Math.floor(addBits((structure.baseGen * structure.genMultiplier)));
  });
  titleBits();
};

// Event listeners
clicker.addEventListener('click', (e) => {
  addBits(player.clickMultiplier);
  clickNoise();
});

toasterDiv.addEventListener('click', (e) => {
  addNewStructure('toaster');
});

mobileDiv.addEventListener('click', (e) => {
  addNewStructure('mobile');
});

computerDiv.addEventListener('click', (e) => {
  addNewStructure('computer');
});

serverDiv.addEventListener('click', (e) => {
  addNewStructure('server');
});

supercomputerDiv.addEventListener('click', (e) => {
  addNewStructure('supercomputer');
});

quantumDiv.addEventListener('click', (e) => {
  addNewStructure('quantum');
});

upgradesDiv.addEventListener('click', (e) => {
  if (e.target.tagName !== 'DIV') {
    addNewUpgrade(e.target);
  }
});

// Show details
marketItems.addEventListener('mouseover', (e) => {
  showDetails(e.target);
});

marketItems.addEventListener('mouseout', (e) => {
  const infoContainer = term.querySelector('.term-info-container');
  infoContainer.remove();
});

upgradesDiv.addEventListener('mouseover', (e) => {
  showDetails(e.target);
});

upgradesDiv.addEventListener('mouseout', (e) => {
  const infoContainer = term.querySelector('.term-info-container');
  infoContainer.remove();
});


// Start game
window.onload = () => {
  addUpgradesToUI();
  setInterval(passiveBitGeneration, 1000);
};
