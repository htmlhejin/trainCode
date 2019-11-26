// 执行器立即执行，如果有异步，会跳过该异步，从而最终会不执行异步代码
// 把成功的回调函数放在一个容器中
// 把失败的回调函数放在一个容器中
const PENDING = "PENDING"
const REJECTED = "REJECTED"
const RESOLVED = "RESOLVED"

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('my Chaining cycle detected for promise #<Promise></Promise>'))
    }
    // 防止多次调用
    let called;
    if ((x != null && typeof x === 'object') || typeof x === 'function') {
        try {
            let then = x.then  // 返回的对象中可能有then函数   return then()
            if (typeof then === 'function') {   // x有then,是一个函数，说明是一个promise
                then.call(x, y => {  // y表示成功的终值---data
                    if (called) return;    // 成功和失败只能调用一个
                    called = true;
                    // resolve的结果如果还是promise,继续处理两个promise的关系
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {  // r---err
                    // 成功和失败只能调用一个
                    if (called) return;
                    called = true;
                    reject(r)
                })
            } else {
                // return的对象有then ,但then不是函数
                resolve(x)  // 直接成功
            }
        } catch (e) {
            //  
            if (called) return;
            // 取then出错就不再继续执行
            reject(e)
        }
    }else{  //  return的是一个普通值
        resolve(x)
    }
}

class Promise {
    constructor(executor) {
        this.status = PENDING;    // 默认是等待态
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];   // 成功态的回调函数
        this.onRejectedCallbacks = [];    // 失败态的回调函数
        let resolve = (value) => {
            // 只能从等待态转到成功态
            if (this.status === PENDING) {
                //  成功态的话
                this.value = value    // 得到成功的终值
                this.status = RESOLVED   // 改变状态
                // 成功态，执行容器中的每一个回调函数
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            // 只能从等待态转到失败态
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                // 失败，执行每一个失败态的回调函数
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            // 执行器立即执行
            executor(resolve, reject)
        }
        //  如果抛出一个错误，catch捕获错误
        catch (e) {
            reject(e)
        }
    }
    // onfulfilled可能会返回一个promise，也可能返回一个普通值，
    // 如果是promise,就采用promise的状态，如果是普通值，就作为下一个.then成功的结果
    // .then本身会返回一个promise,onfulfilled也可能返回一个promise,如果两个promise一样，就会出现循环引用的问题，所以要处理两个promise的关系
    then(onfulfilled, onrejected) {
        // 防止then中没有函数
        onfulfilled = typeof onfulfilled==='function' ? onfulfilled : abc=>abc
        onrejected = typeof onrejected==='function' ? onrejected : err=>{throw err}
        // promise2---> .then默认返回一个新的promise
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    // 默认生成的promise可能会抛出一个错误，return的对象中也可能抛出一个错误，如果有错误，用catch捕获错误
                    // try用来处理异常
                    try {
                        let x = onfulfilled(this.value)  // x可能是一个普通值，也可能是一个promise
                        // 如果x是promise，需要让promise2拥有x的状态
                        // new Promise之后才生成promise2，所以现在还无法获取promise2，通过定时器函数，new之后，生成一个promise2，就可以得到promise2
                        resolvePromise(promise2, x, resolve, reject)
                    }
                    catch (e) {  // 错误发生时的代码
                        // 捕获错误，返回失败的promise
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onrejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            // 默认是等待态，把成功的回调函数和失败的回调函数分别放在容器中
            if (this.status === PENDING) {
                // 订阅
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onfulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
                // 订阅
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onrejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        }
                        catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })

        return promise2;
    }

}

module.exports = Promise
