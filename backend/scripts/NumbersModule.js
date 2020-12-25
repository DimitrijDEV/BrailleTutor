const { getData } = require("./DataModule.js");

const getNumbers = () => {

    let numbers = getData("numbers", "numbers");

    return numbers;
}

exports.getNumbers = getNumbers;