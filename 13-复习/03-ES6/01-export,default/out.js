// export不能直接导出一个字面量
// export 110;

// 这种方式也不可以
// let a=110;
// export a; 

// export导出一个接口，一般叫做接口
// export let a=110;  // 导出一个接口
// export let b=220

// let a=1;
// let b=2;
// export{
//     a,
//     b
// }

// 导出时起别名,导入后使用时只能使用别名
// let a=10;
// let b=20;
// export{
//     a as hello,
//     b as world
// }

// 导入时起别名
// let a=100;
// let b=200;
// export{
//     a,
//     b
// }


// let a=100;
// let b=200;
// export{
//     a,
//     b
// }


// let a=1;
// let b=10;
// setInterval(()=>{
//     a++
// },1000)
// export{
//     a,
//     b
// }

// export default可以导出一个字具体的值
// export default 100;
// export default 'hello';

export default{
    a:100,
    b:200
}