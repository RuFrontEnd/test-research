// 執行 => node ./say.js
let sayOneTwoThree = require("./sayOneTwoThree"),
  saySomething = require("./saySomething");

sayOneTwoThree.sayOneTwoThree = () => {
  console.log("456");
};

saySomething.saySomething();
