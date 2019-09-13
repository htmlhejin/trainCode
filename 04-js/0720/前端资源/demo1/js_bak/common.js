/*--------------------封装一些通用的方法-------------------*/

//定义一个通过id获取元素的函数,Jquery作为javascript的框架，获取元素的方法
function $(obj){
	return document.getElementById(obj);
}



//考虑一个问题，
//1. 我们现在已经封装通过id获取元素的方法，
//2. 能不能也封装一个通过class类名、标签，来获取元素的方法，
//3. 更进一步，能不能通过组合id和标签名，或者组合类名和标签名的方法来获取元素呢？说白了，就是使用CSS选择器的方法
// 比如：.tab p 
//$("#id"),$(".demo"),$("#id p"),$(".demo li"),$("div")
// 判断传入值的首字符,如果是#，说明是通过id，
// 如果是.，说明是通过类，
// 思路，遍历所有的元素，然后看其是否有class=""，有相等的，就挑出来，放入到数组当中


//关键字:已经在使用的
//保留字：未来可能要使用的

// <div calss="demo test"> </div>
//动态的增加和删除test，保证demo不受影响,实际上就是处理字符串
//同样，我们可以利用数组来实现，字符串分割成数组，数组转成字符串

//又考虑一个问题
// 我们现在添加和删除class 的方法，有局限性
// 如果说，我们某一个元素上有两个及两个以上的class时，那用className = "" 就会出问题
// 所以，我们非常需要有这么一个方法，能够单独的增加和删除某个类的方法，
// addClass
// removeClass

/*----------------------------------------------------
*函数名：tab(options,contens)
*参  数：options--表示选项，contents--表示内容
*功  能：选项卡切换，目前仅针对onmouseover
*-----------------------------------------------------*/
function tab1111(options,contents){
	var len = options.length;
	for(var i = 0; i < len; i++){
		options[i].index = i;
		options[i].onmouseover = function(){
			for(var j = 0 ; j < len; j++){
				contents[j].style.display = "none";
			}
			contents[this.index].style.display = "block";
			
			for(var k = 0 ; k < len; k++){
				options[k].className = "";
			}			
			this.className = "on";
		}
	}
}



/*--------------------------------------------------------
 *函数名:function tab(options,contents)
 *参  数:options--选项卡标签对象，contents--内容标签对象 
 *功  能:根据相应的action动作，实现选项卡切换效果
 *------------------------------------------------------*/
function tab(options,contents){
	for(var i = 0; i < options.length; i++){
		//将i作为属性保存到每一个元素当中
		options[i].index = i;
		//注册监听事件
		options[i].onmouseover = function(){
			//1. 隐藏所有的contents
			for(var j = 0; j < options.length; j++){
				//alert(orderLists[j].style.display);
				contents[j].style.display = "none";
			}
			//2.显示当前的contents
			contents[this.index].style.display = "block";		
			//3.改变相应的tab样式
			for(var k = 0; k < options.length; k++){
				options[k].className = "";
			}		
			this.className = "on";				
		}	
	}
}
