/*--------------------猜您喜欢看js效果-------------------*/
// 1. 当然是要获取相关的元素
var btn1s = $("page-num").getElementsByTagName("a");
var lis = $("page-num").getElementsByTagName("li");
//var btn2s = $("page-op").getElementsByTagName("a");
var btn_up = $("up");
var btn_down = $("down");
var guess_pics =  $("picture").getElementsByTagName("ul")[0];

// 定义一个变量，来标识当前所处的索引
var curIndex = 0;

// 2. 先让这个效果出来，这个时候不讲究是怎么出来的，
// 这个不难，但要注意一点，选择这个切换不是自动的，事件源----点击事件
// 因为这里有两组按钮，就必然会产生重复的代码，所以最好是将其封装成一个函数

/*----------------------------------------------------
* 函数名：guess_change(index)
* 参  数：index,即将要切换组的索引，值为0,1,2，分别表示第一、二、三组
* 功  能：根据传入的index，滑动切换到相应的组
*---------------------------------------------------*/
function guess_change(index){
	//当前在第三组上面，如果我现在点切换到第二组的按钮
	//index = 1
	//如果index=1，x1=0px，x2 = -695px
	//这说明什么问题
	//正确的应该是x1=-1390px,x2 = -695px
	//这是为何？ 是不是计算x1出了问题
	//改变位置 一次性到位
	//guess_pics.style.left = (-1)*index*695 + "px";
	//所以获取起点位置，要和curIndex挂钩	
	//要有过程的改变位置，让过程呈现出来
	//(1). 或获取位置,起点和终点
	var x1 = (-1)*curIndex*695; //0
	var x2 = (-1)*index*695 ;    // -695
	//调用slide函数，实现滑动
	slide(guess_pics,x1,x2,10,20);
		
	/*
	//(2).利用定时器让guess_pics以一定的时间间隔和步频来移动
	var guess_dt = setInterval(function(){
		x1 -= 8;
		guess_pics.style.left = x1 + "px";
		if(x1 <= x2){
			clearInterval(guess_dt);
			guess_pics.style.left = x2 + "px";
		}
		//是不是需要校正一下终点位置		
	},10);
	*/
	
	//改变li的样式
	for(var i = 0; i < lis.length; i++){
		lis[i].className = "";
	}
	lis[index].className = "on";
	curIndex = index;  // 保存当前组图片的索引
}

//3.处理第一组按钮点击事件
for(var i = 0; i < btn1s.length; i++){
	//先将i的值作为对象的属性保存起来，以供后用
	btn1s[i].index = i;
	//注册点击事件
	btn1s[i].onclick = function(){
		guess_change(this.index);
		return false;  //阻止(取消)默认的行为
	}
}

//4.处理第二组按钮的点击事件
//如何处理？因为两个按钮的行为是不同的，所以我们单独处理
//当我点击up按钮的时候，要右移,当移到最左边的时候，就停止了
//当我点击donw按钮的时候，要左移，当移动最右边的时候，就停止了]
//上翻
btn_up.onclick = function(){
	//如果curIndex > 0我们就右移,否则就不动
	if(curIndex > 0){
		var prev = curIndex - 1;
		//curIndex--;
		//调用guess_change函数，改变当前显示的图片组
		guess_change(prev);
		curIndex = prev;  //让curIndex同步
	}
	return false; //阻止a默认事件
}
//下翻
//当前状态在第一组，curIndex = 0；如果我们点击下翻按钮，应该是从0到1，
//实际上，一旦点击按钮，curIndex 立马等于1，
//产生问题的症结：是不是我们的curIndex 和传入的index相等所造成的
//解决之道：我们还需要一个变量，来表示没有切换之前的状态
btn_down.onclick = function(){
	if(curIndex < 2){
		var next = curIndex + 1 ; //把当前的索引值保存起来
		//curIndex++;		
		guess_change(next);
		curIndex = next;  //让curIndex同步
	}
	return false;
}


//5.要实现慢慢的滑动效果




//我们最好是封装一个函数，来实现滑动效果
/*-------------------------------------------------
* 函数名：slide(obj,x1,x2,s,step)
* 参  数：obj-滑动对象，x1-起点x坐标，x2-终点x坐标，s-时间间隔，step-步频
* 功  能：滑动效果
*-------------------------------------------------*/
function slide(obj,x1,x2,s,step){
	var dt = setInterval(function(){
		//1.要判断方向，向左还是向右，根据x1和x2的比较关系
		if(x1 < x2){ 
			x1 += step;
			obj.style.left = x1 + "px" ;
			if(x1 >= x2){
				clearInterval(dt);  //清除定时器
				obj.style.left = x2 + "px"; //校正终点位置
			}
		}else{
			x1 -= step;
			obj.style.left = x1 + "px" ;
			if(x1 <= x2){
				clearInterval(dt);  //清除定时器
				obj.style.left = x2 + "px"; //校正终点位置
			}
		}		
	},s);
}



// 凡是超链接和input，点击的时候都会产生一个虚线框,
//利用焦点事件,focus, blur,一旦获得焦点，就马上让其失去焦点
for(var i = 0; i < btn1s.length; i++){
	btn1s[i].onfocus = function(){
		this.blur();
	}
}
btn_up.onfocus = function(){
	this.blur();
}
btn_down.onfocus = function(){
	this.blur();
}











