const { getData } = require("./DataModule.js");

const getWords = () => {

  let words = getData("words", "words");

  return words;
}

exports.getWords = getWords;