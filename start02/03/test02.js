// 演習課題「入賞圏内か判別する」
//  右側のコードエリアのプログラムは、実行しても期待通りの動きをしていません。if文を追加してプログラムを完成させてください。
 
//  place変数には、入賞判別したいレースの順位として、1〜12位までのランダムな数値を代入しています
//  例）5位だったら、5が代入されているものとします。
 
//  6位以上の場合は「●位入賞」と表示し、
//  7位以下だったら「●位入賞圏外」と表示するプログラムを書きましょう。
//  プログラムを実行して、正しく出力されれば演習課題クリアです！
 
//  期待する出力値
//  ----- 出力例1 -----
//  1位入賞
 
//  ----- 出力例2 -----
//  6位入賞
 
//  ----- 出力例3 -----
//  7位入賞圏外
 
//  ----- 出力例4 -----
//  12位入賞圏外

let place = parseInt(Math.random() * 12) + 1;
process.stdout.write (place + "位");
if(place < 7){
  console.log("入賞");
}else{
  console.log("入賞圏外");
}