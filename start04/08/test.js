// 演習課題「標準入力から複数行を読み込もう」
//  標準入力からモンスターの名前が複数行データとして与えられます。
//  この文字列を、「＊＊が現れた」という形式で出力してください。
 
//  プログラムを実行して、正しく出力されれば演習課題クリアです！
 
//  ※コマンド実行後、複数行適当な文字を入力してください。
 
//   入力される値
//  スライム
//  モンスター
//  ゾンビ
//  ドラゴン
//  魔王
 

 
//  期待する出力値
//  スライムが現れた
//  モンスターが現れた
//  ゾンビが現れた
//  ドラゴンが現れた
//  魔王が現れた

let lines = [];
let reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on("line", (line)=>{
  lines.push(line);
});

reader.on("close", () => {
  lines.forEach(i => console.log(i + "が現れた"));
});


