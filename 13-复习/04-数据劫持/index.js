// // 得到数组的原型上的方法
const arrayProto = Array.prototype;
// Object.create创建一个对象，使用现有对象提供新创建对象的proto属性
const proto = Object.create(arrayProto);
// 如果设置的data是一个数组
['push','unshift','shift','pop','slice'].forEach(method=>{
    proto[method]=function(...args){
        console.log("视图更新了...")
        // 本质还是使用原始的push,unshift等方法
        arrayProto[method].call(this,...args)  // 谁调用了push,shift等方法，this指向谁
    }
})


// 侦测数据
function observer(obj) {
    // 默认情况下，defineproperty只能侦测对象,所以排除不是对象的情况
    if (typeof obj !== 'object' || obj == null) {   //  obj ==null也包括了obj是undefined的情况
        return obj;
    }
    if (Array.isArray(obj)) {
        // Object.setPrototypeOf(obj,proto)设置一个指定对象的原型到另一个对象或null
        // Object.setPrototypeOf({},null)
        // 设置obj的原型到proto上
        Object.setPrototypeOf(obj,proto)
        for(let i=0;i<obj.length;i++){
            let item = obj[i]
            observer(item)
        }
    }
    else {
        // data是一个对象，获取，设置的时候都需要得到里面的数据，所以把对象遍历出来
        for (let key in obj) {
            defineReactive(obj, key, obj[key])
        }
    }
}


// 实现数据侦测(劫持) 
function defineReactive(obj, key, value) {
    observer(value)   // 对应82，83，84行
    // defineProperty默认只能侦测对象的变化
    Object.defineProperty(obj, key, {
        // 添加到data中的数据都会被添加一个getter和setter属性
        get() {
            console.log("get...")
            return value;
        },
        set(newValue) {
            observer(newValue)
            if (value !== newValue) {   // 设置前后数据不一样的话再去修改数据，减少性能消耗
                value = newValue;
                console.log("set...")
            }
        }
    })
}

// -------------  // data只是一个number
// let obj=123   
// observer(obj)
// console.log(observer(obj))   // 如果监测的数据只是一个普通值，直接把数据返回，也不进行侦测了，不会打印get...


// -------------  // data是一个一层对象
// let obj={name:"wangcai"}   
// observer(obj)
// obj.name;   // get...
// -----
// obj.name="hello"  // set...
// console.log(obj)  // { name: [Getter/Setter] }
// -----  设置的新数据是一个普通值
// obj.name="hello"   // set...
// -----
// obj.name={score:333}  // 设置了一个新的对象，而不是一个普通值   // set...   只要修改数据，都会触发set(){}
// console.log(obj.name)   // { score: 333 } 视图并没有更新
// obj.name.score=999  // get...   并没有触发set... , 所以如果设置的数据是对象，仍然要监测，然后遍历出来，以便get,set
// obj.name.score=999    // 继续监控之后，就会触发set，更新了视图
// -----
// obj.name=[1,2,3]   // set...
// obj.name[0]=999   // get...，并没有触发set...(视图没有更新)，所以观测的数据如果是数组，还需要处理
// ----
// let obj={name:{a:110}}
// observer(obj)
// obj.name.a=222   // 如果没有41行，则无法更新视图，set不会触发，所以如果对象的值如果是一个对象，需要继续监测
// ----     // 设置的对象是一个数组
// let obj={name:"wangcai"}  // -------------------------------
// observer(obj)
// obj.name=[1,2,3]   // set...
// obj.name[1]=33333    // 不会触发set
// ----对象中有数组
// 改变数组中的数据有很多方法，一是直接赋值，，二是push,shift等方法
let obj={name:[1,2,3],age:666}
observer(obj)
obj.name[0]=999  //第一次直接赋值， 不会改变视图  // 不会触发set,因为Object.defineProperty只能侦测到对象的变化
obj.name.push(4)  // 第二次通过push改变数组时，也会连带第一次直接赋值的变化更新数组，也就是第二次才可以更新视图
console.log(obj.name[0],obj.name[3])  // 999 4

// -------------  // data是一个数组
// -----  数组中是基本数据类型的数据
// let obj = [1, 2, 4]
// observer(obj)
// obj[0]  既不会触发get,也不会触发set，是正确的
// ----  数组中有对象
// let obj = [1,2,3,{name:"hello"}]
// observer(obj)
// obj[3].name   // get...
// obj[3].name="world"   // set...

//总结  数据劫持
{/* 
    一、 Object.definePorperty默认只能侦测对象的变化，所以首先观察数据，看是对象，数组，还是null还是普通字面量
    二、如果是普通的自字面量或是null或是undefined,直接返回数据，如过是对象
    三、如果是对象，需要遍历出每个对象，以便获取或修改数据，
    四、精细化设置每个对象的键，值，如果值是一个对象，需要继续侦测
    五、如果设置的只也是一个对象，仍需要侦测
    六、如果对象的值是一个数组，改变数组中的数据有两种方式，如果是直接赋值，不会更新视图，
        如果是通过push,shift等方法，那么需要继承数组原型上的方法，然后本质还是调用原型上的方法去改变数据
*/}




