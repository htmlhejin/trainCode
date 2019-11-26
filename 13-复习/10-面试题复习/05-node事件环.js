setImmediate(() => {
    console.log('setImmediate1');
    setTimeout(() => {
        console.log('setTimeout1')
    }, 0);
});
Promise.resolve().then(res=>{
    console.log('then');
})
setTimeout(() => {
    process.nextTick(() => {
        console.log('nextTick');
    });
    console.log('setTimeout2');
    setImmediate(() => {
        console.log('setImmediate2');
    });
}, 0);

// 这道题的输出顺序是：then、setTimeout2、nextTick、setImmediate1、setImmediate2、setTimeout1
// setImmediate1、setImmediate2同时输出原因是:只有当前队列执行完毕才能进入下一队列


