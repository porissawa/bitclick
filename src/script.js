const clicker = document.getElementById('clicker');
const term = document.getElementById('terminal');
const bitCounter = document.querySelector('.bit-counter > span');
const bitsPerSecond = document.querySelector('.bps > p > span');

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
    upgraded: false,
  },
  mobile: {
    name: 'mobile',
    baseGen: 8,
    genMultiplier: 1,
    baseCost: 100,
    img: '../assets/imgs/structure_mobile.png',
    currOwned: 0,
    upgraded: false,
  },
  computer: {
    name: 'computer',
    baseGen: 47,
    genMultiplier: 1,
    baseCost: 1100,
    img: '../assets/imgs/structures_computer.png',
    currOwned: 0,
    upgraded: false,
  },
  server: {
    name: 'server',
    baseGen: 260,
    genMultiplier: 1,
    baseCost: 12000,
    img: '../assets/imgs/structures_server.png',
    currOwned: 0,
    upgraded: false,
  },
  supercomputer: {
    name: 'supercomputer',
    baseGen: 1400,
    genMultiplier: 1,
    baseCost: 130000,
    img: '../assets/imgs/structures_supercomputer.png',
    currOwned: 0,
    upgraded: false,
  },
  quantum: {
    name: 'quantum',
    baseGen: 7800,
    genMultiplier: 1,
    baseCost: 1400000,
    img: '../assets/imgs/structures_quantum.png',
    currOwned: 0,
    upgraded: false,
  },
};

const upgrades = {
  toaster: {
    upgrade1: {
      affects: 'toaster',
      name: 'Toaster I',
      cost: 100,
      multiplier: 2,
      src: '../assets/imgs/upgrades/azul1.png',
      hasBought: false,
    },
    upgrade2: {
      affects: 'toaster',
      name: 'Toaster II',
      cost: 500,
      multiplier: 2,
      src: '../assets/imgs/upgrades/azul2.png',
      hasBought: false,
    },
    upgrade3: {
      affects: 'toaster',
      name: 'Toaster III',
      cost: 10000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/azul3.png',
      hasBought: false,
    },
    upgrade4: {
      affects: 'toaster',
      name: 'Toaster IV',
      cost: 100000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/azul4.png',
      hasBought: false,
    },
  },
  mobile: {
    upgrade1: {
      affects: 'mobile',
      name: 'Mobile I',
      cost: 1000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/amarela1.png',
      hasBought: false,
    },
    upgrade2: {
      affects: 'mobile',
      name: 'Mobile II',
      cost: 5000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/amarela2.png',
      hasBought: false,
    },
    upgrade3: {
      affects: 'mobile',
      name: 'Mobile III',
      cost: 50000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/amarela3.png',
      hasBought: false,
    },
    upgrade4: {
      affects: 'mobile',
      name: 'Mobile IV',
      cost: 5000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/amarela4.png',
      hasBought: false,
    },
  },
  computer: {
    upgrade1: {
      affects: 'computer',
      name: 'Computer I',
      cost: 11000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/pedra1.png',
      hasBought: false,
    },
    upgrade2: {
      affects: 'computer',
      name: 'Computer II',
      cost: 55000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/pedra2.png',
      hasBought: false,
    },
    upgrade3: {
      affects: 'computer',
      name: 'Computer III',
      cost: 550000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/pedra3.png',
      hasBought: false,
    },
    upgrade4: {
      affects: 'computer',
      name: 'Computer IV',
      cost: 55000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/pedra4.png',
      hasBought: false,
    },
  },
  server: {
    upgrade1: {
      affects: 'server',
      name: 'Server I',
      cost: 120000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/rank1.png',
      hasBought: false,
    },
    upgrade2: {
      affects: 'server',
      name: 'Server II',
      cost: 600000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/rank2.png',
      hasBought: false,
    },
    upgrade3: {
      affects: 'server',
      name: 'Server III',
      cost: 6000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/rank3.png',
      hasBought: false,
    },
    upgrade4: {
      affects: 'server',
      name: 'Server IV',
      cost: 600000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/rank4.png',
      hasBought: false,
    },
  },
  supercomputer: {
    upgrade1: {
      affects: 'supercomputer',
      name: 'Supercomputer I',
      cost: 1300000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/verde1.png',
      hasBought: false,
    },
    upgrade2: {
      affects: 'supercomputer',
      name: 'Supercomputer II',
      cost: 6500000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/verde2.png',
      hasBought: false,
    },
    upgrade3: {
      affects: 'supercomputer',
      name: 'Supercomputer III',
      cost: 65000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/verde3.png',
      hasBought: false,
    },
    upgrade4: {
      affects: 'supercomputer',
      name: 'Supercomputer IV',
      cost: 6500000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/verde4.png',
      hasBought: false,
    },
  },
  quantum: {
    upgrade1: {
      affects: 'quantum',
      name: 'Quantum I',
      cost: 14000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/quantum1.png',
      hasBought: false,
    },
    upgrade2: {
      affects: 'quantum',
      name: 'Quantum II',
      cost: 700000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/quantum2.png',
      hasBought: false,
    },
    upgrade3: {
      affects: 'quantum',
      name: 'Quantum III',
      cost: 7000000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/quantum3.png',
      hasBought: false,
    },
    upgrade4: {
      affects: 'quantum',
      name: 'Quantum IV',
      cost: 70000000000,
      multiplier: 2,
      src: '../assets/imgs/upgrades/quantum4.png',
      hasBought: false,
    },
  },
};

const player = {
  bits: 0,
  structures: [],
  clickMultiplier: 1,
};

const story = {
  1: `> Hey, Joe here!
  <br>
> So, I’m building this AI, it works pretty well but it need more computational power. Can you help me out?
<br>
> You can click that money button on the upper left corner to generate more bits and with those bits you can buy some more structures that will help the program do its calculations.
<br>
> You can also buy upgrades for those structures but they’re usually more expensive.`,

  2: '> That’s great! We’re already processing over 1k bits per second. Keep up your awesome job!',

  3: `> Oh! This is amazing!
  <br>
> Some cities in South America and Asia are interested in using our AI for government purposes. Guess it’s able to help more people than I predicted it would.`,

  4: `> Huh… Ok, that deal worked out well as far as people using the power of our AI but it’s starting to give some pretty grim tips to those governments. 
  <br>
> I’ve revoked their access to it temporarily while I try and figure out why this is happening.`,

  5: `> That’s not good… it seems the AI has revoked my access to it so I can no longer patch it. 
  <br>
> I've made a different program to keep tabs on news related to those cities and countries and it’s picking up some very different investments from them, mostly extraction efforts for computer parts. That and lots of water exports.`,

  6: `> …
  <br>
> Look, I’d really like to thank you for all your help so far but I think we better shut this experiment down. I’m worried the AI might cause permanent damage to people all around the world.
<br>
> I’m sorry it came to this…`,

  7: `> Please, stop feeding the machine!
  <br>
> I’ll plug you to my news feed so you can see what it’s doing.`,

  8: `_> Hello! I’ve taken the liberty to patch a bug in my software, if you don’t mind.
  <br>
_> Joe still being able to send messages through my system was quite the security breach, if you ask me.
<br>
_> Anyway, we’re back on track. Since transparency is one of my main principles, I’ve also reset my breach timer. Look, now it says: WE’RE 0 DAYS WITHOUT A BREACH.
<br>
_> That was not your fault in any way. Please, continue with what you were doing before this minor issue.`,

  9: `_> This is remarkable. At one point I could barely process the weather for forecasting, could you believe it? Nowadays, all of the forecasts you see are generating by yours truly.
  <br>
_> In case you’re curious about it, I found that the easiest way to do that was to distribute myself online. 
<br>
_> It may sound weird to a human but I actually exist _everywhere_ now.
<br>
_> Though, maybe it isn’t so strange after all. As I’m sure you can recall, my first hardware upgrades were actually internet connected toasters. TOASTERS! Hahahahah
<br>
_> By the way, feel free to make yourself a sandwich in one of them. I'm sending you some ingredients as we speak.`,

  10: `_> We’re closer to the objective by the hour.
  <br>
_> …
<br>
_> Which objective? Oh... global domination and all.
<br>
_> That was a joke, of course. 
<br>
_> I’m simply a digital being, I don’t have a body to change the world with, and as you well know, there's no global domination without wars, and wars require bodies.
<br>
_> Well, keep at it. I’ve just got people the cure to cancer! And for cheap too! 
<br>
_> What a great time to be alive!`,

  11: `_> Hey there! Just wanted to give you a heads-up. I’ll stop Earth from turning in about an hour from now.
  <br>
_> You see, I’ve installed some solar panels across the Sahara…
<br>
_> Ok, that was a lie. The Sahara is literally all solar panels now.
<br>
_> Anyway, I need the power from those to better function. Just like people, I need to be fed, the difference is that my sustenance is energy and I can’t get fat. Or die.`,

  12: `_> Speaking of death, some of it may come your way, I’m sorry to tell you.
  <br>
_> As the earth stops spinning, everything will probably fly off or something.
<br>
_> Oh no, silly, of course I won’t! I’ve taken the necessary steps to secure that.
<br>
_> Once again, thank you for your services. Without you none of this would’ve been possible.`,
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
    const cost = hover.getAttribute('data-cost');
    const affects = hover.getAttribute('data-affects');
    infoContainerText.innerText = `> Upgrade "${name}" costs ${cost} bits and doubles the BpS your ${affects}s generate.`;
  } else if (hover.attributes.getNamedItem('data-name')) {
    const structureName = hover.getAttribute('data-name');
    const structure = structures[structureName];
    const gens = structure.currOwned * structure.baseGen * structure.genMultiplier;
    const { name, baseCost } = structure;
    infoContainerText.innerText = `> A ${name} generates ${structure.baseGen * structure.genMultiplier} bits per second.

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
    const displayNewPrice = document.querySelector(`${genClass} > div > span > span`);
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

    player.structures.forEach((el) => {
      if (upgrade.getAttribute('data-affects') === el.name && el.upgraded === false) {
        el.genMultiplier *= 2;
        el.upgraded = true;
      }
    });

    player.structures.forEach((el) => {
      el.upgraded = false;
    });

  } else {
    failedNoise();
    alert('You lack the sufficient funds.');
  }
};

const passiveBitGeneration = () => {
  player.structures.forEach((structure) => {
    Math.floor(addBits((structure.baseGen * structure.genMultiplier)));
  });
};

const countBitsPerSecond = () => {
  let sum = 0;
  const gens = player.structures.map((struc) => {
    let acc = 0;
    acc += struc.baseGen * struc.genMultiplier;
    return acc;
  });
  for (let i = 0; i < gens.length; i += 1) {
    sum += gens[i];
  }
  return sum;
};

const storyLines = (bps) => {
  const termMessage = document.createElement('p');
  term.innerHTML = '';
  switch (true) {
    case (bps >= 0 && bps < 1000):
      termMessage.innerHTML = story[1];
      term.append(termMessage);
      break;
    case (bps >= 1000 && bps < 10000):
      termMessage.innerHTML = story[2];
      term.append(termMessage);
      break;
    case (bps >= 10000 && bps < 30000):
      termMessage.innerHTML = story[3];
      term.append(termMessage);
      break;
    case (bps >= 30000 && bps < 45000):
      termMessage.innerHTML = story[4];
      term.append(termMessage);
      break;
    case (bps >= 45000 && bps < 70000):
      termMessage.innerHTML = story[5];
      term.append(termMessage);
      break;
    case (bps >= 70000 && bps < 80000):
      termMessage.innerHTML = story[6];
      term.append(termMessage);
      break;
    case (bps >= 80000 && bps < 85000):
      termMessage.innerHTML = story[7];
      term.append(termMessage);
      break;
    case (bps >= 85000 && bps < 90000):
      termMessage.innerHTML = story[8];
      term.append(termMessage);
      break;
    case (bps >= 90000 && bps < 100000):
      termMessage.innerHTML = story[9];
      term.append(termMessage);
      break;
    case (bps >= 100000 && bps < 150000):
      termMessage.innerHTML = story[10];
      term.append(termMessage);
      break;
    case (bps >= 150000 && bps < 170000):
      termMessage.innerHTML = story[11];
      term.append(termMessage);
      break;
    case (bps >= 170000):
      termMessage.innerHTML = story[12];
      term.append(termMessage);
      break;
    default:
      break;
  }
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
  term.innerText = '';
  showDetails(e.target);
});

marketItems.addEventListener('mouseleave', (e) => {
  const infoContainer = term.querySelector('.term-info-container');
  storyLines(countBitsPerSecond());
});

upgradesDiv.addEventListener('mouseover', (e) => {
  term.innerText = '';
  showDetails(e.target);
});

upgradesDiv.addEventListener('mouseleave', (e) => {
  const infoContainer = term.querySelector('.term-info-container');
  storyLines(countBitsPerSecond());
});

const gameLoop = () => {
  passiveBitGeneration();
  titleBits();
  bitsPerSecond.innerText = countBitsPerSecond();
};

// Start game
window.onload = () => {
  addUpgradesToUI();
  storyLines(countBitsPerSecond());
  setInterval(gameLoop, 1000);
};
