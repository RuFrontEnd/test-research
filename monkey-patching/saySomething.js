const sayOneTwoThree = require("./sayOneTwoThree");

// saySomething 函式相依 sayOneTwoThree 函式

const saySomething = () => {
  sayOneTwoThree.sayOneTwoThree();
};

module.exports = { saySomething };
