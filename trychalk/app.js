const chalk = require("chalk");

const helloBlue = () => {
  console.log(chalk.blue("Hello world!"));
};

const helloRed = () => {
  console.log(chalk.red("Hello world!"));
};

const stringToColor = (str, color) => {
  console.log(chalk[color](str));
};

const evensBlueOddsYellow = (str) => {
  let newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    if ([i] % 2 === 0) {
      console.log(chalk.yellow(newStr[i]));
    } else {
      console.log(chalk.blue(newStr[i]));
    }
  }
  newStr.join(" ");
};

const angryText = (str) => {
  let upper = str.toUpperCase();
  console.log(chalk.red.underline.bold(upper));
};

const backgroundCyan = (str) => {
  console.log(chalk.white.bgCyan(str));
};

const boldFirstUnderlineLast = (str) => {
  let newStr = str.split(" ");
  console.log(
    chalk.bold(newStr[0] + chalk.underline(newStr[newStr.length - 1]))
  );
};
helloBlue();
helloRed();
stringToColor("the cat", "yellow");
evensBlueOddsYellow("the cat");
angryText("the cat");
backgroundCyan("the cat");
boldFirstUnderlineLast("the cat");
