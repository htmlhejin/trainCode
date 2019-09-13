let p = new Promise((resolve, reject) => {
    resolve("hello")
})
let p1 = p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 如果resolve或reject中又是一个promise，会递归解析
            resolve(new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("888")
                }, 1000)
            }))
        }, 1000)

    })
})
p1.then(data => {
    //传递过来的data不是promise,而是888，promise会递归解析
    console.log(data)  //888
})