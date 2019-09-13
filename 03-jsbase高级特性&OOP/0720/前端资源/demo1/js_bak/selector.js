/*--------------------js选择器封装-------------------*/
//考虑一个问题，
//1. 我们现在已经封装通过id获取元素的方法，
//2. 能不能也封装一个通过class类名、标签，来获取元素的方法，
//3. 更进一步，能不能通过组合id和标签名，或者组合类名和标签名的方法来获取元素呢？说白了，就是使用CSS选择器的方法
// 比如：.tab p 
//$("#id"),$(".demo"),$("#id p"),$(".demo li"),$("div")
// 判断传入值的首字符,如果是#，说明是通过id，
// 如果是.，说明是通过类，
// 思路，遍历所有的元素，然后看其是否有class=""，有相等的，就挑出来，放入到数组当中

function $(str){
	//根据str的取值，来决定使用相应的方法$("#id"),$("p"),$(".classname")
	//1.取得参数的第一个字符,截取字符串
	var firstChar = str.substr(0,1);
	//2.对首字符进行判断
	if(firstChar == "#"){
		//表示是通过id选择器来获取元素
		var obj = str.substr(1);
		//id是具有唯一性
		return document.getElementById(obj);		
	}else if(firstChar == "."){
		//表示是通过类选择器来获取元素
		var obj = str.substr(1);
		return getElementsByClassName(obj);
	}else{
		//表示是通过标签来获取元素的		
		//标签可能会有多个，所以，它返回的是一个数组
		return document.getElementsByTagName(str);
	}
}

//假如有这么一个方法，叫做getElementsByClassName的方法，是不是就好办了
function getElementsByClassName(name){
	//所以，我们要遍历所有的标签，然后分别来判断它是否有class属性、并且class值等于name 的标签
	//定义一个数组，用于存放元素
	var arrElement = new Array();
	var elements = document.getElemetsByTagName("*");
	for(var i = 0; i < elements.length; i++){
		//判断某个元素是否具有某个属性,注意浏览器的兼容性
		if(!-[1,]){
			var attName = elements[i].getAttribute("className");
		}else{
			var attName = elements[i].getAttribute("class");
		}
		if(attName == name){
			arrElement.push(elements[i]);
		}		
	}	
	return arrElement;
}


