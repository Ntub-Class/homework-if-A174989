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



let money = 40000;
let limit = 500000; // 限制值

if (limit >= 500000) {
    if(monry >= 40000){
        console.log('乾爹好');
    }else{
        console.log('窮鬼');
    }
}else{
    console.log('不好意思請重新輸入');
}