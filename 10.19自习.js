// 实现一个bind函数
// 通过apply或者call方法实现
Function.prototype.bind = function (obj, arg) {
    var arg = Array.prototype.slice.call(arguments, 1);
    var context = this;
    return function (newAry) {
        arg = arg.concat(Array.prototype.slice.call(newArg))
        return context.apply(obj, arg);
    }
    var F = function () {
        F.prototype = context.prototype;
        BeforeUnloadEvent.prototype = new F();
        return bound;
    }
}

// 用setTimeout来实现setInterval
// callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。
setTimeout(function () {
    setTimeout(arguments.callee, 500);
    // console.log('1');
}, 500)

function say() {
    setTimeout(say, 500)
    // console.log('1');
}
setTimeout(say, 500)






//代码的执行顺序
setTimeout(function () { console.log(1) }, 0);
new Promise(function (resolve, reject) {
    console.log(2);
    resolve();
}).then(function () { console.log(3) }).then(function () { console.log(4) })
Process.nextTick(function () { console.log(5) });
console.log(6);
//2   6   5  3  4  1


//实现sleep效果
// (1) while循环的方式
function sleep(ms) {
    var start = Date.now(),
        expire = start + ms;
    while (Date.now() < expire);
    console.log('1111');
    return;
}
//延迟ms时间输出1111

//(2)通过promise来实现
function sleep(ms) {
    var temple = new Promise((resolve) => {
        console.log(111);
        setTimeout(resolve, ms)
    });
    return temple;
}
sleep(500).then(function () {
    console.log(222)
})
//先输出111，再延迟500ms后输出222

//(3) 通过async封装
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function test() {
    var temple = await sleep(1000);
    console.log(1111);
    return temple;
}
//延迟1000毫秒输出1111


var a = 11;
function test() {
    this.a = 22;
    let b = () => { console.log(this.a) }
    b();
}
var x = new test();
//22  定义时绑定


const person = { name: 'lydia' };
function sayHi(age) {
    console.log(`${this.name} is ${age}`)
}
sayHi.call(person, 21);
sayHi.bind(person, 21);
//call是立即执行的
//bind返回函数的副本，但带有绑定上下文，不是立即执行

function sayHi() {
    return (() => 0)()
}
typeof sayHi()
//sayHi方法返回的是立即执行函数的返回值，0；


console.log(typeof typeof 1);
//typeof 1 返回number
//typeof number 返回string


const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers)
    // [1,2,3,5*empty,11]



    (() => {
        let x, y
        try {
            throw new Error()
        } catch (x) {
            (x = 1), (y = 2)
            console.log(x)
        }
        console.log(x)
        console.log(y)
    })()

//catch代码块接收参数x。当我们传递参数时。这与之前定义的变量x不同，这个
//是属于catch块级作用域的。将块级作用域中的变量赋值为1，同时设置变量y的值。catch块之外的变量x的值仍为undefined




[[0, 1], [2, 3]].reduce((acc, cur) => {
    return acc.concat(cur)
},
    [1, 2]
)
//[1,2,0,1,2,3]
//[1,2]是初始值，初始值将会作为首次调用时第一个参数acc的值
//第二次执行时，acc的值为[1,2,0,1]


setInterval(() => {
    console.log('hi')
}, 1000);
// setInterval()方法返回一个唯一的id，可被clearsetInterval函数用来取消定时



let person={name:'lydia'};
const members=[person];
person=null;
console.log(members);
//{name:'lydia}


const person={
    name:'lydia',
    age:21
};
for(const item in person){
    console.log(item)
}
//'name','age'


console.log(3+4+'5')
//"75"


const num=parseInt("7*6",10)
//7
//parseInt检查字符串中的字符是否合法，一旦遇到一个在指定
//进制中不合法的字符后，立即停止解析并且忽略后面所有字符



[1,2,3].map(num=>{
    if(typeof num==='number') return;
    return num*2; 
});
//当函数没有返回值时，即默认返回undefined。





function getInfo(member,year){
    member.name='lydia';
    year='1998';
}
const person={name:'sarah'};
const birthyear='1997';
getInfo(person,birthyear);
console.log(person,birthyear);
//{name:'lydia'},'1997'
//普通参数都是值传递，而对象不同，是引用传递。







function greeting(){
    throw "hello world!"
}
function sayHi(){
    try{
        const data=greeting();
        console.log('It worked!',data)
    }catch(e){
        console.log("oh no an error!",e)
    }
}
sayHi();
//"oh no an error!","hello world!"






function Car() {
    this.make='lamborghini';
    return {make:'Maserati'}
}
const myCar=new Car();
console.log(myCar.make)
//返回属性的时候，属性的值等于返回的值，而不是构造函数设定的值





(()=>{
    let x=(y=10)
})()
console.log(typeof x);
console.log(typeof y);
//let x=(y=10)======let x=y=10    y=10; let =y
//设定y等于10时，实际增加了一个属性y给全局对象。在浏览器中，window等于10；
//虽然声明了变量x等于y，但是let只作用于块级作用域，在使用typeof时，x没有定义




class Dog{
    constructor(name){
        this.name=name;
    }
}
Dog.prototype.bark=function() {
    console.log(`woof I am ${this.name}`);
}
const pet=new Dog('mara')
pet.bark();
delete Dog.prototype.bark;
pet.bark();
//当我们尝试调用一个不存在的函数时TypeError异常会被抛出







const set=new Set([1,1,2,3,4]);
console.log(set);
//{1，2，3，4}
// Set对象是独一无二的值的集合；也就是说同一个值只出现一个





const name='lydia';
age=12;
console.log(delete name);
console.log(delete age);
// false,true
//delete 返回一个布尔值，但是通过var 从cost 或者let关键字声明的变量无法用delete操作符删除







const numbers=[1,2,3,4,5];
const [y]=numbers;
console.log(y);
// 1
//解构赋值，[y]=[1,2,3,4,5]
//因为只有一个y，所以等于数组第一个值1





const user={name:'lydia',age:21};
const admin={admin:true,...user};
console.log(admin);
//{ admin: true, name: "Lydia", age: 21 }



const person={name:'lydia'};
Object.defineProperty(person,'age',{value:21});
console.log(person);
console.log(Object.keys(person));
//{ name: "Lydia", age: 21 }, ["name", "age"]
//使用defineProperty()方法给对象添加一个属性之后，属性默认为不可枚举。
//Object。keys方法仅返回对象中可枚举的属性，因此只剩下'name';



const settings={
    username:'lydiahallie',
    level:19,
    health:90
};
const data=JSON.stringify(settings,['level','health']);
console.log(data);
//JSON.stringify的第二个参数是 替代者(replacer). 替代者(replacer)可以是个函数或数组，用以控制哪些值如何被转换为字符串。





let num=10;
const increaseNumber=()=>num++;
const increasePassedNumber=number=>number++;
const num1=increaseNumber();
const num2=increasePassedNumber(num1);
console.log(num1);
console.log(num2);
//10 10
//++先返回操作值再累加操作值。




const value={number:10};
const multiply=(x={...value})=>{
    console.log(x.number*=2);
}
multiply();
multiply()
multiply(value)
multiply(value)
//20 20 20 40
//在ES6。可以用默认值初始化参数，如果没有给函数传参，或者传参为undefined
//那么参数为默认值
//默认参数只有在调用时才会计算
//x={...value}  x的默认值为{number:10}
//*=运算符实际上是x.number=x.number*2
//第三次调用时，传递一个参数。
//修改了x.number的值


