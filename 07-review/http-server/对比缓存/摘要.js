const crypto = require("crypto") 
// 摘要的其中一种算法md5
// createHash表示摘要的算法，update表示摘要的内容，digest表示摘要成的内容以什么样的形式显示
let r1=crypto.createHash("md5").update("123456").digest("base64")
// console.log(r1) // 4QrcOUm6Wau+VuBX8g+IPg==

let r2=crypto.createHash("md5").update(r1).digest("base64")
console.log(r2)   // DIjVZpTC+zvMQW4SLBBy6w==

// 摘要特点
/*
    1、对不同的内容摘要，摘要的长度总是相同
    2、摘要不可逆
    3、相同的内容，摘要结果相同，不同的内容，摘要结果不同
*/
