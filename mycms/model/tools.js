//包含很多工具函数
// 其中一种加密方案 :md5
let md5=require("md5")
// 可能有很多工具函数，用对象包起来
let tools={
    // 密码加密
    abc(str){
        return md5(str) //返回经过md5加密后的字符串
    },
    // 得到当下时间
    getTime(){
        return new Date()
    },
    // 定义一个转换数据的方法
    cateToList(data){
        let firstArr=[]
        for(let i=0;i<data.length;i++){
            if(data[i].pid=="0"){ //找到一级title
                firstArr.push(data[i])
            }
        }
        // console.log(firstArr)
        // 找子元素
        // firstArr[0].list=[{},{},{}]
        // firstArr[1].list=[{},{},{}]
        // firstArr[2].list=[{},{},{}]
        for(let i=0;i<firstArr.length;i++){
            firstArr[i].list=[]
            for(let j=0;j<data.length;j++){
                if(firstArr[i]._id==data[j].pid){
                    firstArr[i].list.push(data[j])
                }
            }
        }
        // console.log(firstArr)
        return firstArr
    }
}
module.exports=tools


  /*
            firstArr  :[ { _id: 5ab3209bdf373acae5da097e,
            title: '成功案例',
            description: '成功案例',
            keywords: '成功案例',
            pid: '0',
            add_time: '',
            status: '1' },
        { _id: 5ab34b61c1348e1148e9b8c2,
            title: '开发服务',
            pid: '0',
            keywords: '成功案例',
            status: '1',
            description: '成功案例',
            add_time: 2018-03-22T06:45:42.467Z },
        { _id: 5afa56bb416f21368039b05d,
            title: '新闻资讯',
            pid: '0',
            keywords: '新闻资讯',
            status: '1',
            description: '新闻资讯' } ]
        */


        /* firstArr:
        [ { _id: 5ab3209bdf373acae5da097e,
    title: '成功案例',
    description: '成功案例',
    keywords: '成功案例',
    pid: '0',
    add_time: '',
    status: '1',
    list: [ [Object], [Object], [Object], [Object], [Object] ] },
  { _id: 5ab34b61c1348e1148e9b8c2,
    title: '开发服务',
    pid: '0',
    keywords: '成功案例',
    status: '1',
    description: '成功案例',
    add_time: 2018-03-22T06:45:42.467Z,
    list: [] },
  { _id: 5afa56bb416f21368039b05d,
    title: '新闻资讯',
    pid: '0',
    keywords: '新闻资讯',
    status: '1',
    description: '新闻资讯',
    list: [ [Object], [Object] ] } ]
        */