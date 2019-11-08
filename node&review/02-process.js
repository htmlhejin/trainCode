// import { promises } from "dns";

// console.log(process.cwd())  //d:\huashantrain\1907--1912\node review
// console.log(process.env)    //{无数内容}

// nextTick>then
Promise.resolve().then(()=>{
    console.log("then") 
})

process.nextTick(()=>{
    console.log("nextTick")
})

// nextTick   then