//1
let greeting;
greetign = {};
console.log(greetign);

//2
function bark() {
    console.log('woof')
}
bark.animal = 'dog'

//3
function test(){
    var n=4399;
    function add(){
        n++;
        console.log(n);
    }
    return {
        n:n,
        add:add
    }
}
var result=test();
var result2=test();
result.add();
result.add();
console.log(result.n);
result2.add();

//4
