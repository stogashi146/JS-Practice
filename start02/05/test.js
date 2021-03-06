// 演習課題「攻撃を回避させてみよう」
//  右のプログラムでは出目が1から6のサイコロをふっています。
//  サイコロの出目によってスライムからの攻撃を回避するプログラムを書いてみましょう。
 
//  出目が4から6ならば、「スライムの攻撃をかわした」と表示してください。
//  そうでなければ、「スライムから10のダメージを受けた」と表示してください。
 
//  プログラムを実行して、正しく出力されれば演習課題クリアです！
 
//  期待する出力値
//  --- 出力例1 ---
//  サイコロは4
//  スライムの攻撃をかわした
 
//  --- 出力例2 ---
//  サイコロは1
//  スライムから10のダメージを受けた

process.stdin.setEncoding('utf8');
let dice = parseInt(Math.random() * 6) + 1;
console.log("サイコロは" + dice);

if(dice > 3){
  console.log("スライムの攻撃をかわした");
}else{
  console.log("スライムから10のダメージを受けた");
}

