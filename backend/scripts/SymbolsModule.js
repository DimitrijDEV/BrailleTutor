const { getData } = require("./DataModule.js");

const getSymbols = () => {

  let symbols = getData("symbols", "symbols");

  return symbols;
}

exports.getSymbols = getSymbols;