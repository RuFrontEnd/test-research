// 執行 => node ./say.js
let sayOneTwoThree = require("./sayOneTwoThree"),
  saySomething = require("./saySomething");

sayOneTwoThree.sayOneTwoThree = () => {
  console.log("456");
}; // 這樣會直接修改 sayOneTwoThree 的邏輯

// 如果是寫成 let { sayOneTwoThree } = require("./sayOneTwoThree")
// sayOneTwoThree.sayOneTwoThree = () => {
//  console.log("456");
// };
// 這樣是只有在 say.js 的 sayOneTwoThree 邏輯會修改

saySomething.saySomething();
