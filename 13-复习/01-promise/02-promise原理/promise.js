// promise原理

const PENDING = "PENDING"
const REJECTED = "REJECTED"
const RESOLVED = "RESOLVED"

class Promise {
    constructor(executor) {
        this.status = PENDING;    // 默认是等待态
        this.value = undefined;  // 终值
        this.reason = undefined;  // 拒因
        let resolve=(value)=>{
            // 只能从等待态转到成功态
            if (this.status === PENDING) {
                //  成功态的话
                this.value = value    // 得到成功的终值
                this.status = RESOLVED   // 改变状态
            }
        }
        let reject =(reason)=>{
            // 只能从等待态转到失败态
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
            }
        }
       try{
            // 执行器立即执行
            executor(resolve, reject)
       }
        //  如果抛出一个错误，catch捕获错误
       catch(e){
        reject(e)
       }
    }
    then(onfulfilled,onrejected){
        if(this.status===RESOLVED){
            onfulfilled(this.value)
        }
        if(this.status===REJECTED){
            onrejected(this.reason)
        }
    }

}

module.exports=Promise