// 演習課題「標準入力からテキストを取得する」
//  標準入力から文字列を1行取得して、テキストを出力するプログラムを作成してください。
//  読み込む文字列には、空白やタブは含まれません。

const { read } = require("fs");

 
//  プログラムを実行して、正しく出力されれば演習課題クリアです！
 
//   入力される値
//  コマンドライン から入力してください
 
 
//  期待する出力値
//  入力された文字：入力した値

let readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("入力してください:", (answer)=>{
console.log(`入力された文字：${answer}`);

  readline.close();
});