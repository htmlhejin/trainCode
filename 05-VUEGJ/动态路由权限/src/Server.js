let express  = require('express');
 
 
let app = express();
//  后端配置，允许所有人都可以访问api接口
app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
 

app.get('/role',(req,res)=>{
    res.json({
       menuList:[
            {pid:-1,path:'/cart',name:'购物车',id:1,auth:'cart'},
            {pid:1,path:'/cart/cart-list',name:'购物车列表',id:4,auth:'cart-list'},
            {pid:4,path:'/cart/cart-list/lottery',auth:'lottery',id:5,name:'彩票'},
            {pid:4,path:'/cart/cart-list/product',auth:'product',id:6,name:'商品'},
            {pid:-1,path:'/shop',name:'商店',id:2,auth:'shop'},
//             {pid:-1,path:'/profile',name:'个人中心',id:3,auth:'profile'},
//             {pid:-1,path:'/hello',name:'hello',id:3,auth:'hello'},
        ],
        buttonAuth:{
            edit:true, // 可编辑
        }
    })
})
app.listen(3000);
 