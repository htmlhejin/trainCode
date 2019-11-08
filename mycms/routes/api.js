// api页面

// 载入路由模块
const router=require("koa-router")()
const index=require("./api/index")
const manage=require("./api/manage")
const employee=require("./api/employee")


router.use(index)
router.use("/manage",manage)
router.use("/employee",employee)


module.exports=router.routes()



