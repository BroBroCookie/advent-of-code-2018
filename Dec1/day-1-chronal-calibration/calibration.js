const fs = require("fs");

const main = () => {
  const input = fs.readFileSync("./input.txt", { encoding: "utf8" });

  let resultingFrequency = input
    .split(/\n/g)
    .map(Num => Number(Num))
    .reduce((acc, currVal) => acc + currVal, 0);

  console.log(resultingFrequency);
};

main();
