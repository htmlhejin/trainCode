
// promise.all()接收promise对象数组为参数，只有全部为resolve的时候才继续调用
const p1 = new Promise((resolve, reject) => {
    resolve(1);
});

const p2 = new Promise((resolve, reject) => {
    // reject(2);
    resolve(2)
});

const p3 = new Promise((resolve, reject) => {
    reject(3);
});

Promise.all([p1, p2, p3]).then(data => { 
    // console.log(data); // 2
    console.log(data); // 3
}, err => {
    console.log(err);
}); 

// promise.race接收promise对象数组为参数，只要有一个为resolve，就会继续进行后面的处理
function timerPromisefy(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}
var startDate = Date.now();

Promise.race([
    timerPromisefy(10),
    timerPromisefy(20),
    timerPromisefy(30)
]).then(function (values) {
    console.log(values); // 10
});
