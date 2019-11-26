/*--------------------动态增加和删除class-------------------*/

/*-------------------------------------------
* 函数名：addClass(obj,name);
* 参  数：obj--要操作的对象，name--类名
* 返回值：无
* 功  能：动态增加类名
*------------------------------------------*/
function addClass(obj,name){
	//1.首先就要获取到原来的class  [获取元素的属性]
	//此时要注意，浏览器的兼容性
	if(!-[1,]){ //ie系列
		var cn = obj.getAttribute("className");
	}else{  //非ie系列
		var cn = obj.getAttribute("class");
	}		
	//2.先将已有的class属性值保存到一个数组当中，[字符串->数组]
	var arr = cn.split(" ");	
	//alert(arr[1])
	//3.然后，再将新添加的class属性值添加到此数组当中  [给数组增加元素]
	arr.push(name);
	//4.将数组转换成字符串，  [数组->字符串]
	var newcn = arr.join(" ");
	//5.将新的字符串作为class的属性值 [设置元素的属性]
	if(!-[1,]){ //ie系列
		obj.setAttribute("className",newcn);
	}else{  //非ie系列
		obj.setAttribute("class",newcn);
	}
}

/*-------------------------------------------
* 函数名：removeClass(obj,name);
* 参  数：obj--要操作的对象，name--类名
* 返回值：无
* 功  能：动态删除类名
*------------------------------------------*/
function removeClass(obj,name){
	//1.获取元素的class属性
	if(!-[1,]){ //ie系列
		var cn = obj.getAttribute("className");
	}else{  //非ie系列
		var cn = obj.getAttribute("class");
	}		
	//2.去掉class属性值为name的属性值,
	//注意，要判断传入的name是否存在于属性值中
	
	//将得到的字符串转成数组
	var arr = cn.split(" ");		
	//查找索引
	var index = findIndex(arr,name); 
	//判断有没有找到
	if(index != -1){
		arr.splice(index,1); //删除name元素
	}	
	//把数组转换成新的字符串
	var newcn = arr.join(" ");
	/*
	if(cn.indexOf(name) != -1){  //说明存在
		var newcn = cn.replace(name,"");   //正则
	}	
	*/	
	//3.设置元素的class属性
	if(!-[1,]){ //ie系列
		obj.setAttribute("className",newcn);
	}else{  //非ie系列
		obj.setAttribute("class",newcn);
	}	
}

	//class="test1 test2 test3 test4"
	//如果要追求完美一点，我们还是应该使用数组的办法
	//在数组当中，删除对应的元素，
	//再将数组转换成字符串
	//test数组 ，有四个元素，分别是test1 test2 test3 test4
	//选择要利用数组的方法，来删除选定的元素，比如test2
	//var arr3 = new Array('test1','test2','test3','test4');
	//var temp = 'test2';
	//如何做到? 最后还是要回归到使用splice(,1)
	//1.要找到temp在array中的位置，索引,有两种结果，一是找到了，二是没找到
	//2.使用splice函数就可以将其删除

	//找索引，最好是封装成一个函数

function findIndex(arrObj,ele){
	//定义一个变量，表示索引
	var index = null;
	//循环遍历数组，进行比较
	for(var i = 0; i < arrObj.length; i++){
		if(arrObj[i] == ele){
			//表示找到
			index = i;
			break;
		}
	}	
	if(index != null){ //注意一下，0的取值
		return index;
	}else{
		return -1;
	}	
	
}






