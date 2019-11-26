
// process.nextTick方法在当前执行栈尾部，下一个事件环之前触发回调函数，也就是说它指定的任务总是在所有异步任务之前执行
// setImmediate方法在当前“任务队列”尾部添加事件，也就是在下一次事件环时执行，比process.nextTick总是滞后
// process.nextTick(function A() {
//   console.log(1);
//   process.nextTick(function B(){console.log(2);});
// });

// setTimeout(function timeout() {
//   console.log('TIMEOUT FIRED');
// }, 0)
// 结果是 1 2 TIMEOUT FIRED
// then setTimeout2 nextTick setImmediate1 setTimeout1 setImmediate2

process.nextTick(function A() {
    console.log(1);
    process.nextTick(function B() { console.log(2); });
});
new Promise((resolve,reject)=>{
    resolve("hello")
}).then(data=>{
    console.log(data)
})
// 结果是1 2 hello , 由此可见，process.nextTick执行顺序先于promise.then