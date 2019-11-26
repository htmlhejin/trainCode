// 迭代器是一个对象，里面有一个next函数，函数返回一个对象，对象中有两个参数，value,done
// 迭代器--- 迭代出每一项
function createInterator(items){
    let i = 0;
    return{
        next(){
           done = (i>=items.length)  
           value = !done ? items[i++] : undefined  // ++ 在后，值是旧值
            return{
                value:value,
                done:done    
            }
        }    
    }
}
let arr=["red","green","blue"]
// 产生一个迭代器  interator
let interator = createInterator(arr)
// 每调用一次next迭代出一项
console.log(interator.next())  // { value: 'red', done: false }
console.log(interator.next())  // { value: 'green', done: false }
console.log(interator.next())  // { value: 'blue', done: false }
console.log(interator.next())  // { value: undefined, done: true }