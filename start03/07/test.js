// ＃07:標準入力で複数行データを受け取ってみよう 
//  標準入力から複数行のデータを受け取った場合の動きを確認します。

// ３行入力する
process.stdin.resume();
process.stdin.setEncoding("utf8");

let lines = [];
let reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on("line",(line) => {
  lines.push(line);
})

reader.on("close",()=>{
  console.log("hello" + lines[0]);
  console.log("hello" + lines[1]);
  console.log("hello" + lines[2]);
})