
// 1.求多个数组的交集
let a = new Set([1, 2, 3,3,3]);
let b = new Set([4, 3, 2,2,2]);
let intersect = new Set([...a].filter(x => b.has(x)))
console.log(intersect)



// 2.防抖
function debounce(fn) {
    let timeout = null;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, 500);
    };
}


// 2.节流
function throttle(fn) {
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, 500)
    }
}



//异步
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2')
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout')
}, 0)

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});

console.log('script end')

//1.'script start'  'async1 start'  'async2'  'promise1'  'script end'  'async1 end'  'promise2'  'setTimeout'



const an=['hello','an'];
an.toString();
Object.prototype.toString.call(an);//[object Array]


//请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
let a1=['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
let a2=['A', 'B', 'C', 'D'].map((item)=>{
    return item+3
})
let a3=[...a1,...a2].sort().map((item)=>{
    if(item.includes('3')){
        return item.split('3')[0]
    }
    return item
})
console.log(a3);



//改造下面的代码，使之输出0 - 9，写出你能想到的所有解法
for (var i = 0; i < 10; i++) {
    setTimeout((i) => {
        console.log(i);
    }, 1000, i)
}

//1
for (let i = 0; i<10; i++) {
    setTimeout((i) => {
        console.log(i);
    }, 1000, i)
}
//2
for(var i=0;i<10;i++){
    ((i)=>{
        setTimeout(()=>{
            console.log(i)
        },1)
    })(i)
}
//3
for(var i=0;i<10;i++){
    setTimeout(i=>{
        console.log(i);

    },1000*i,i)
}
//4
for(var i=0;i<10;i++){
    try{
        throw i;
    }catch(i){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}


//输出什么
var b = 10;
(function b() {
    b = 20;
    console.log(b)
}) ()
console.log(b);




//使之输出10和20
// var b=10;
// (function b(){
//     b=20;
//     console.log(b)
// })()

//1    10
var b=10;
(function b(b){
   b.b=20;
    console.log(b)
})(b)

//2    10
that=this
var b = 10;
(function b(b) {
    that.b = 20;
    console.log(b);
})(b)

//3    20
var b=10;
(function b(b){
    b=20;
    console.log(b)
})(b)

//4    20
var b=10;
(function b(){
    var b=20;
    console.log(b)
})()


//a在什么情况下输出1
var a = '?';
if (a == 1 && a == 2 && a == 3) {
    console.log(1)
}



var a = {
    i: 1,
    toString() {
        return a.i++;
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log(1)
}


var a = [1,2,3];
a.toString=a.shift;
if (a == 1 && a == 2 && a == 3) {
    console.log(1)
}


var a = [1,2,3];
a.join = a.shift;
if (a == 1 && a == 2 && a == 3) {
    console.log(1)
}

//sleep函数
const sleep=(time)=>{
    return new Promise(resolve=>setTimeout(resolve,time))
}
sleep(1000).then(()=>{
    console.log('2');
    
})


//使用sort()排序
var arr=[102, 15, 22, 29, 3, 8];
var b=arr.sort(function(a,b){
    return a-b;
});
console.log(b);



var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1);
obj.push(2);
console.log(obj);




var a = { n: 1 };
var b = a;  
a.x = a = { n: 2 };

console.log(a.x)
console.log(b.x)
//undefined   {n:2}



//把一个字符串的大小写取反
function processString(s){
    var arr=s.split('');
    var new_arr=arr.map((item)=>{
        return item===item.toUpperCase()?item.toLowerCase():item.toUpperCase();
    });
    return new_arr.join('');
}
console.log(processString('AbC'));





