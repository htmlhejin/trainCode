// 合并action，dispatch时可以代码简写
// 将action与dispatch绑定在一起，内部还是dispatch了一个action
function bindActionCreators(actionCreator,dispatch){
    return function(...args){
        // console.log(...args)   // 10  其实就是payload
        return dispatch(actionCreator(...args))
    }
}

// 判断传过来的actionCreator是对象还是函数
export default function(actionCreator,dispatch){
    if(typeof actionCreator=='function'){
        return bindActionCreators(actionCreator,dispatch)
    }
    // 如果是对象，遍历出每个对象，得到每一个action
    const boundActionCreators={}
    for(let key in actionCreator){
        boundActionCreators[key]=bindActionCreators(actionCreator[key],dispatch)
    }
    return boundActionCreators;
}
// 当调用了bindActionCreators，要么返回一个绑定之后的actionCreator,要么返回一个对象，对象里面是绑定之后的actionCreator
