export default () => {
  let wrapper = document.getElementById("wrapper-js");

  const RANDOMIZE = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = RANDOMIZE(min, max);

    return next;
  };

  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 },
    { configuration: 3, roundness: 1 },
  ];

  let prev = 0;

  setInterval(() => {
    const INDEX = uniqueRand(0, combinations.length - 1, prev),
      combination = combinations[INDEX];

    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;

    prev = INDEX;
  }, 3000);
};
