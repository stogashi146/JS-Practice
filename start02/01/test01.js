// 演習課題「順位が1位だったら「おめでとう！」と表示しよう」
//  右側のコードエリアにあるプログラムは、実行するたびに、1から3までの数値をランダムに生成して、順位として表示します。ここにif文を追加して、1位の時には「おめでとう！」と表示するようにしてください。
//  プログラムを実行して、正しく出力されれば演習課題クリアです！
 
//  期待する出力値
//  ----- 出力例1 -----
//  あなたの順位は1位です
//  おめでとう！
 
//  ----- 出力例2 -----
//  あなたの順位は2位です
 
//  ----- 出力例3 -----
//  あなたの順位は3位です

let number = parseInt(Math.random() * 3) + 1;
console.log("あなたの順位は" + number + "位です");

if(number == 1){
  console.log("おめでとう！");
}
