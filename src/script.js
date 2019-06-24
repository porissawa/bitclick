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

// objects
const structures = {
  toaster: {
    name: 'toaster',
    baseGen: 1,
    genMultiplier: 1,
    baseCost: 15,
    text: 'Who knew we\'d ever need internet connected toasters?',
    img: '../assets/imgs/structures_toaster.png',
  },
  mobile: {
    name: 'mobile',
    baseGen: 8,
    genMultiplier: 1,
    baseCost: 100,
    text: 'Ring ring, who\'s there?',
    img: '../assets/imgs/structure_mobile.png',
  },
  computer: {
    name: 'computer',
    baseGen: 47,
    genMultiplier: 1,
    baseCost: 1100,
    text: 'Another computer to your collection.',
    img: '../assets/imgs/structures_computer.png',
  },
  server: {
    name: 'server',
    baseGen: 260,
    genMultiplier: 1,
    baseCost: 12000,
    text: 'LOREM IPSUM THINK OF SOMETHING DOLOR AMET',
    img: '../assets/imgs/structures_server.png',
  },
  supercomputer: {
    name: 'supercomputer',
    baseGen: 1400,
    genMultiplier: 1,
    baseCost: 130000,
    text: 'Like Auntie, but its hashes are binary.',
    img: '../assets/imgs/structures_supercomputer.png',
  },
  quantum: {
    name: 'quantum',
    baseGen: 7800,
    genMultiplier: 1,
    baseCost: 1400000,
    text: 'They do exist! You just couldn\'t possibly afford one before.',
    img: '../assets/imgs/structures_quantum.png',
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
  clickMultiplier: 1,
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
      upImg.setAttribute('data-cost', upgrade.cost);
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

    const newCost = bought.baseCost * 1.15;
    bought.baseCost = Number(newCost.toFixed(0));
    const genClass = `.buy-${bought.name}`;
    const displayNewPrice = document.querySelector(`${genClass} > div > span`);
    displayNewPrice.innerText = bought.baseCost;

    // add to structures visible on right side
    const newStructure = document.createElement('img');
    newStructure.src = `../assets/imgs/structures_${bought.name}.png`;
    const structureSpace = document.querySelector(`.structures-${structures[structure].name}`);
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
  } else {
    alert('You lack the sufficient funds');
  }
};

const addNewUpgrade = (upgrade) => {
  if (player.bits >= Number(upgrade.getAttribute('data-cost'))) {
    removeBits(Number(upgrade.getAttribute('data-cost')));
    upgrade.setAttribute('hidden', true);

    player.structures.forEach((structure) => {
      if (upgrade.getAttribute('data-affects') === structure.name) {
        structure.genMultiplier = Number(upgrade.getAttribute('data-multiplier'));
      }
    });
  } else {
    alert(`You lack the sufficient funds.`)
  }
};

const passiveBitGeneration = () => {
  player.structures.forEach((structure) => {
    addBits((structure.baseGen * structure.genMultiplier));
  });
};

// Event listeners
clicker.addEventListener('click', e => addBits(player.clickMultiplier));
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
