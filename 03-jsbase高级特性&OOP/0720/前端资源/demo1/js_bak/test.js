/*--------------------电影部分js效果-------------------*/
//获取li元素集合
var movie_tabs = $("content_movie").getElementsByTagName("li");
//获取div元素集合
var movie_contents = $("content_movie").getElementsByTagName("div");
var len = movie_tabs.length;
tab(movie_tabs,movie_contents);
/*
for(var i = 0; i < len; i++){
	//将i作为属性保存到每一个元素当中
	movie_tabs[i].index = i;
	//注册监听事件
	movie_tabs[i].onmouseover = function(){
		//alert(this.index);
		//1. 把所有的ol都不显示
		for(var j = 0; j < len; j++){
			//alert(orderLists[j].style.display);
			movie_contents[j].style.display = "none";
		}
		//2.把当前的ol显示出来
		movie_contents[this.index].style.display = "block";		
		//3. 把span的样式切换一下
		for(var k = 0; k < len; k++){
			movie_tabs[k].className = "";
		}		
		this.className = "on";				
	}	
}


*/



