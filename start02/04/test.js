// 演習課題「大吉が出る確率を上げてみよう」
//  右のコードを完成させて、「大吉」か「大凶」を出力する、次のようなおみくじプログラムを作成してください。
 
//  - omikuji変数には、1から100までの値がランダムに代入されます。
//  - omikuji変数の値が30から100の場合は、「omikujiの中身は○○なので大吉」と表示
//  - omikuji変数の値が29以下の場合は、「omikujiの中身は○○なので大凶」と表示
 
//  例1: omikujiの中身は32なので大吉
//  例2: omikujiの中身は12なので大凶
 
//  プログラムを実行して、正しく出力されれば演習課題クリアです！
 
//  期待する出力値
//  ----- 出力例1 -----
//  omikujiの中身は37なので大吉
 
//  ----- 出力例2 -----
//  omikujiの中身は11なので大凶
 
//  ----- 出力例3 -----
//  omikujiの中身は2なので大凶
 
//  ----- 出力例4 -----
//  omikujiの中身は91なので大吉

let omikuji = parseInt(Math.random() * 100) + 1;
if (omikuji > 29) {
 console.log("omikujiの中身は" + omikuji + "なので大吉");
} else {
 console.log("omikujiの中身は" + omikuji + "なので大凶");
}