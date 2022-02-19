// 演習課題「1から10までの偶数を表示する」
//  whileを使って、1から10までの偶数を一行ずつ表示するプログラムを作成してください。
 
//  プログラムを実行して、正しく出力されれば演習課題クリアです！

let number = 1;
while(number <= 10){
  if(number % 2 == 0 ){
    console.log(number);
  }
  number = number + 1;
}