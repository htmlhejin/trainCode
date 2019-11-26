// 执行器立即执行，如果有异步，会跳过该异步，从而最终会不执行异步代码
// 把成功的回调函数放在一个容器中
// 把失败的回调函数放在一个容器中
const PENDING = "PENDING"
const REJECTED = "REJECTED"
const RESOLVED = "RESOLVED"

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
                this.onRejectedCallbacks(fn => fn())
            }
        }
        // try用来处理异常
        try {
            // 执行器立即执行
            executor(resolve, reject)
        }
        //  如果抛出一个错误，catch捕获错误
        catch (e) {
            reject(e)
        }
    }
    then(onfulfilled, onrejected) {
        if (this.status === RESOLVED) {
            onfulfilled(this.value)
        }
        if (this.status === REJECTED) {
            onrejected(this.reason)
        }
        // 默认是等待态，一开始就把成功的回调函数和失败的回调函数分别放在容器中，时间到了就执行容器中的函数
        if (this.status === PENDING) {
            // 订阅
            this.onResolvedCallbacks.push(() => {
                onfulfilled(this.value)
            })
            // 订阅
            this.onRejectedCallbacks.push(() => {
                onrejected(this.reason)
            })
        }
    }

}

module.exports = Promise