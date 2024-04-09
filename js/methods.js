export let plus = (number) => {
  return number + number;
};

export let minus = (number) => {
  return number - number;
};

export let multiply = (number) => {
  return number * number;
};

export let divide = (number) => {
  return number / number;
};

export let addWord = (word) => {
  return `${word} - ${word}`;
};

export let addSpace = (word) => {
  return `${word} ${word}`;
};

export let makeQuote = (word) => {
  return `"${makeQuote}"`;
};
