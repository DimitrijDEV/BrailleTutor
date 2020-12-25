
const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");

const
  { getAlphabet } = require("./scripts/AlphabetModule"),
  { getNumbers } = require("./scripts/NumbersModule"),
  { getSymbols } = require("./scripts/SymbolsModule"),
  { getWords } = require("./scripts/WordsModule"),
  { getResponse, getError } = require("./scripts/ResponseModule");

app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log("Backend server live on " + port));


app.get('/alphabet', function (req, res) {
  const result = getAlphabet();
  res.send(
    getResponse(result)
  );
})

app.get('/words', function (req, res) {
  const result = getWords();
  res.send(
    getResponse(result)
  );
})

app.get('/numbers', function (req, res) {
  const result = getNumbers();
  res.send(
    getResponse(result)
  );
})


app.get('/symbols', function (req, res) {
  const result = getSymbols();
  res.send(
    getResponse(result)
  );
})





