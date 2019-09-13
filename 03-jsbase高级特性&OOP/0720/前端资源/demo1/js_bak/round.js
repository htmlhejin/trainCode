/*---------------图片轮播效果---------------*/

var bigPic = $("bigPic");      //获取包含大图片的div

//(ul.getElementById.) 整体作为一个元素，相对于document 
var smallPics = $("smallPic").getElementsByTagName("li");  //获取包含小图片的li,应当返回一个数组
//获取之后，先别急着往下写,先测试一番，看看有没有获取到
//alert(smallPics);


//alert(bigPic);
//每隔2秒钟整个div向上移动310px，    
// 先定义一个定时器
var dt;
// 定义一个变量，表示当前是第几张图片
var init = 1;
// pic-1:(-1)*(index-1) * 310
// pic-2:(-1)*(index-1) * 310


start(); //启动自动切换函数

//定义一个start函数，自动切换
function start(){
	//定义一个定时器
	dt = setInterval(function(){
		init++;	
		if(init==13){
			init = 1;
		}
		change(init);
	},4000);
}

//定义一个stop函数，停止切换
function stop(){
	clearInterval(dt);
}

//提高代码的可读性
//耦合性，高内聚，低耦合
// 单独顶一个函数，通过传一个index参数，实现切换到某一张图片
function change(index){	
	// 动作1. 大图片切换
	bigPic.style.top = (-1)*(index-1)*310 + "px";
	//alert(index);
	//动作2. 小图片切换
	//思想，看当前是处于第几张图片，就把class为on的类添加到相应的li标签
	// 具体步骤：
	//（1）.不管三七二十一，先把所有的li标签的class都清除掉
	//（2）.把处于当前的li标签的class设为on
	for(var i=0; i < smallPics.length; i++ ){
		smallPics[i].className = "";
	}
	smallPics[index-1].className = "on";
}

//定义大图片的事件
bigPic.onmouseover = function(){
	//alert("onmouseover");
	stop();
}

bigPic.onmouseout = function(){
	//alert("onmouseout");
	start();
}

//定义小图片的事件，注意要使用循环遍历
for(var i = 0; i < smallPics.length; i++){
	//首先是mouseover事件
	//alert(i);
	//如果说，smallPics[i]当中有这么一个属性--表示索引的属性，是不是就好办了
	//此时此刻，我们就定义这么一个属性给每一个li,num
	smallPics[i].num = i;  //重难点
	smallPics[i].onmouseover = function(){
		init = this.num+1;  //去更新当前的索引
		stop();
		change(this.num+1);
	}	
	//其次是mouseout事件
	smallPics[i].onmouseout = function(){
		//鼠标离开，就重新自动切换
		start();
	}
}






