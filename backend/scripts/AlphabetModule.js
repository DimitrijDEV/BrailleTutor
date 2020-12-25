const { getData } = require("./DataModule.js");

const getAlphabet = () => {

  let alphabet = getData("alphabet", "alphabet");

  return alphabet;
}

exports.getAlphabet = getAlphabet;