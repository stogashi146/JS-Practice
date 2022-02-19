// 演習課題「じゃんけんプログラムを作ろう」
//  入力エリアに、じゃんけんの手(例：グー,チョキ,パー)が用意してあります。
//  右のコードエリアのコメントを参考にして、じゃんけんプログラムを作ってください。
//  じゃんけんの手は、標準入力から読み込んだ文字列をカンマで分割して、そのうち1つをランダムに出力します。
//  このとき、カンマで分割した配列をそのまま出力して、それからじゃんけんの結果を出力してください。
 
//  プログラムを実行して、正しく出力されれば演習課題クリアです！
 
//   入力される値
//  グー,チョキ,パー
 
//  期待する出力値
//  ["グー", "チョキ", "パー"]
//  グー

let input_string = "";
let reader = require('readline').createInterface({
 input: process.stdin,
 output: process.stdout
});

reader.on('line', (line) => {
 input_string = line;
});

reader.on('close', () => {
 let values = input_string.split(",");

   // 配列をそのまま出力する
  console.log(values);
 
  // 生成するランダムな数値の範囲を調べる
  values_size = values.length
 
  // ランダムにインデックスを生成する
  target = values[Math.floor(Math.random() * values_size)];
 
  // 選ばれた手を出力する
  console.log(target);
 
});
