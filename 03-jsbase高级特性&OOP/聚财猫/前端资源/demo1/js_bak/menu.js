
//为什么没有获取到
//此时，我们的浏览器一片空白，body里面的内容还没有加载，还没有形成DOM（文档对模型）
//如何解决,有一个事件，关于window,onload--页面加载事件

var sw1 = document.getElementById("history_sw");	
var hist = document.getElementById("my_history");
var sw2 = document.getElementById("down_sw");	
var down = document.getElementById("down_xl");

//1.下拉菜单效果
//鼠标放上去
sw1.onmouseover = function(){
	//1.给li加一个类名
	this.className="on";
	
	//2.让隐藏的区块进行显示
	hist.style.display = "block";
	//alert(hist.style.display);
}

//鼠标离开的时候
sw1.onmouseout = function(){
	// 1. 去掉li的类名，也就是去掉样式
	this.className = "";
	
	//2. 让显示的区块进行隐藏
	hist.style.display="none"
}


//鼠标放上去
sw2.onmouseover = function(){
	//1.给li加一个类名
	this.className="on";
	
	//2.让隐藏的区块进行显示
	down.style.display="block"
}

//鼠标离开的时候
sw2.onmouseout = function(){
	// 1. 去掉li的类名，也就是去掉样式
	this.className = "";
	
	//2. 让显示的区块进行隐藏
	down.style.display="none"
}

// 2. 图片轮播效果








