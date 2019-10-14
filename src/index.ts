// 請介紹兩個字串方法跟數字方法
//使用fontsize()
var worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>

var worldString = 'Hello, world';

//使用fontcolor()
console.log(worldString.fontcolor('red') +  ' is red in this line');
// '<font color="red">Hello, world</font> is red in this line'

console.log(worldString.fontcolor('FF00') + ' is red in hexadecimal in this line');
// '<font color="FF00">Hello, world</font> is red in hexadecimal in this line'


//數字可以有小數點也可以不用。
var x = 34.00;    // 小數點
var y = 34;       // 整數
document.getElementById("demo").innerHTML = x + "<br>" + y;
//var x = 34.00 定義有小數點。
//var y = 34 定義為整數。
//x + "<br>" + y 顯示x的值，並換行(<br>)顯示y的值，x與y的值不管整數或有小數點都會顯示為整數。

//用科學符號顯示數字
var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123
document.getElementById("demo").innerHTML = x + "<br>" + y;
		
		


let money = 40000;
let limit = 500000; // 限制值

if (limit >= 500000) {
    if(money >= 40000){
        console.log('乾爹好');
    }else{
        console.log('窮鬼');
    }
}else{
    console.log('不好意思請重新輸入');
}
