var obj={
    name:"wangcai",
    // age:18
    age:{
        a:10
    }
}

// 定义一个方法监控数据，这样数据改变时会被监控到
function observe(obj){
	if(typeof obj !== 'object' || obj == null){
		return obj;
	} 
    // 如果监控的数据是一个对象，则把对象中的数据遍历出来
    if(typeof obj == "object"){
        for(let key in obj){
            // 通过defineProperty来修改对象，但是一般不直接使用需要通过一个方法
            defineReactive(obj,key,obj[key])
        }
    }
}

// 修改对象的属性
function defineReactive(obj,key,value){
    observe(value)   // 如果value是一个对象，继续监控，然后才能对value进行设置，如果不继续监控，则无法修改对象
    Object.defineProperty(obj,key,{    // defineProperty默认只能侦测对象
        // 获取对象的属性时调用get
        get(){
            console.log("get")
            console.log(value)
            return value;
        },
        // 设置对象的属性时调用set
        set(val){
            // 如果设置的新值是一个对象，继续监控
            observe(val)
            console.log("set")
            if(value !==val){
				value=val   // 新值赋给value
				console.log(val)  
			}
        }
    })
}

// 监控对象
observe(obj)

// 如果data中么有该对象，是劫持不到的，打印处undefined
console.log(obj.abc)


// 获取key
// obj.name;   // get
// console.log(obj.name)  // get   wangcai

// 设置key
// obj.name="hello"  // set   hello

// 如果对象中又一个对象
// obj.age   // get  { a: 10 }
// console.log(obj.age.a)   // get  { a: 10 } 10
// obj.age.a=999   // get  { a: 10 },并没有调用set方法
// 继续监控之后
// obj.age.a=999   // get  { a: [Getter/Setter] }   set   999

// obj.age={b:100}   // set   { b: 100 }
// obj.age.b  // get  { a: [Getter/Setter] }   // 如果设置的新值是一个对象，应继续监控

// obj.age=100   // set  100

// obj.age={b:100}    // 如果设置的新值是一个对象，应继续监控   //   set  { b: [Getter/Setter] }
// obj.age   // get  { b: [Getter/Setter] }

// obj.age.b  // get  { b: [Getter/Setter] }   get  100

obj.age=[1,2,3]     // set  [ [Getter/Setter], [Getter/Setter], [Getter/Setter] ]

// obj.age.push(4)     // Object.defineProperty对数组设置无效   //get  [ [Getter/Setter], [Getter/Setter], [Getter/Setter] ]
obj.age.length--   //  length监控不到 get  [ [Getter/Setter], [Getter/Setter], [Getter/Setter] ]

// obj.age={b:100}
// console.log(obj.age.b)  // set  { b: [Getter/Setter] } get  { b: [Getter/Setter] }  get  100  100

// Object.defineProperty对数组设置无效 ,vue中这样解决
// 把方法放在一个数组中，遍历数组，把方法挂载数组的原型上，this借用该原型方法，这样就可以监控到数组的变化
let arr=["push","pop","shift","unshift"]
arr.forEach((method)=>{
    let old=Array.prototype[method]
    // 每个方法挂载原型上执行function
    Array.prototype[method]=function(value){
        console.log(value)
        old.call(this,value)
    }
})
arr.push(567890)   // 567890





const arrayProto = Array.prototype
arrayProto[method]=function(){
	
}