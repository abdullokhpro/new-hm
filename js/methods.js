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

export let addId = (word) => {
  return `"First ID ${word}"`;
};

export let removeSpace = (word) => {
  return word.trim();
};

export let toUpper = (word) => {
  return word.toUpperCase();
};

export let triple = (word) => {
  return word * word * word;
};

export let addMark = (word) => {
  return `${word}!`;
};

export let makeCode = (word) => {
  return `<${word}>`;
};
