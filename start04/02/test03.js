// 演習課題「変数を配列に代入しよう」
//  右のコードには、player_1, player_2, player_3という変数に、文字列が代入されています。
//  このplayer_1 ~ 3を、この順番で配列に追加して、そのまま標準出力に出力してください。
 
//  プログラムを実行して、正しく出力されれば演習課題クリアです！
 
//  期待する出力値
//  [ '勇者', '魔法使い', '戦士' ]

let player_1 = '勇者';
let player_2 = '魔法使い';
let player_3 = '戦士';

let jobs = [];

jobs.push(player_1,player_2,player_3);

console.log(jobs);