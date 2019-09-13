/*--------------------导航部分右边选项卡切换效果-------------------*/
//获取span元素
var options = $("option").getElementsByTagName("span");
//获取ol元素
var orderLists = $("tab").getElementsByTagName("ol");
var len = options.length;
for(var i = 0; i < len; i++){
	//将i作为属性保存到每一个元素当中
	options[i].index = i;
	//注册监听事件
	options[i].onmouseover = function(){
		//alert(this.index);
		//1. 把所有的ol都不显示
		for(var j = 0; j < len; j++){
			//alert(orderLists[j].style.display);
			orderLists[j].style.display = "none";
		}
		//2.把当前的ol显示出来
		orderLists[this.index].style.display = "block";		
		//3. 把span的样式切换一下
		for(var k = 0; k < len; k++){
			options[k].className = "";
		}		
		this.className = "on";				
	}	
}


