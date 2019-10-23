// 设置token
export const setLocal=(key,value)=>{
    if(typeof value=='object'){
        JSON.stringify(value)  // localStorage中保存的是字符串
    }
    localStorage.setItem(key,value)
}

// 获取token
export const getLocal=(key)=>{
    return localStorage.getItem(key)
}