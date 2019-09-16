/*--------------------fade函数的封装-------------------*/

/**-----------------------------------------
* 函数名：fade(obj,s,step,io)
* 参  数：obj--要操作的对象，s--时间间隔，step--变化量，io--是fadeout还是fadein
* 返回值：无
* 功  能：实现渐隐渐显效果
*-------------------------------------------*/
function fade(obj,s,step,io){
	var dt = null; //定义一个定时器		
	//判断是fadein还是fadeout
	if(io){//表示fadeout
		var opa = 100;   //不透明度为100，即初始状态是显示的
	}else{ //表示fadein
		var opa = 0;    ////不透明度为0，即初始状态是隐藏的
	}	
	//通过定时器不停的去改变其opacity属性
	dt = setInterval(function(){
		if(io){ //说明这是fadeout
			opa -= step;  //让不透明度减小
		}else{
			opa += step;  //让不透明度增加
		}
			
		//在此处，我们做一个判断，根据不同的浏览器来执行不同的方法
		if(!-[1,]){ //IE 浏览器
			//alert("我是IE ，哈哈");
			obj.style.filter = "alpha(opacity =" + opa +")";
		}else{  //非IE浏览器
			//alert("我非IE，嘿嘿");
			obj.style.opacity = parseFloat(opa/100);
		}						
		if(opa <= 0){  //如果已经隐藏了，就停止
			clearInterval(dt);
			opa = 0;   //校正
		}
		if(opa >= 100){ //说明已经完全显示了，就停止
			clearInterval(dt);
			opa = 100; //校正
		}
	},s);
}

