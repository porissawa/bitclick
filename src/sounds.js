const clickNoise = () => {
  Tone.Master.volume.value = -10;

  const noise = new Tone.NoiseSynth({
    noise: {
      type: 'pink',
    },
    envelope: {
      attack: 0.005,
      decay: 0.001,
      sustain: 0,
    },
  }).toMaster();

  noise.triggerAttackRelease('1n');
};

const buyUpgrade = () => {
  const reverb = new Tone.JCReverb(0.2).connect(Tone.Master);
  Tone.Master.volume.value = -24;
  
  const boop = new Tone.Synth({
    oscillator: {
      type: 'sine',
    },
    envelope: {
      attack: 0.05,
      decay: 0.01,
      sustain: 0.003,
      release: 0.01,
    },
  }).connect(reverb).toMaster();

  boop.triggerAttackRelease('f#4', '4n');
};

const buyNoise = () => {

  Tone.Master.volume.value = 12;

  const sound = new Tone.MonoSynth({
    detune: 0.5,
    oscillator: {
      type: 'square',
    },
    filter: {
      Q: 12,
      type: 'bandpass',
      rolloff: -12,
    },
    envelope: {
      attack: 0.005,
      decay: 0.01,
      sustain: 0.3,
      release: 0.01,
    },
    filterEnvelope: {
      attack: 0.06,
      decay: 0.2,
      sustain: 0.5,
      release: 0.02,
      baseFrequency: 100,
      octaves: 12,
      exponent: 2,
    },
  }).connect(Tone.Master).toMaster();

  sound.triggerAttackRelease('d2', '24n');
};


const failedNoise = () => {
  Tone.Master.volume.value = -2;

  const pluck = new Tone.PluckSynth({
    attackNoise: 2,
    dampening: 1000,
    resonance: 0.6,
  }).toMaster();

  pluck.triggerAttackRelease('f#1');
};
