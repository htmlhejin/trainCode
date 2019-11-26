/*--------------------电影模块js效果-------------------*/
//电影模块左侧选项卡切换
var satisfy_options = $("satisfy_options").getElementsByTagName("li");
var satisfy_contens = $("satisfy").getElementsByTagName("ol");
tab(satisfy_options,satisfy_contens);

//电影模块中间选项卡切换
var movie_options = $("content_movie").getElementsByTagName("li");
var movie_contens = $("content_movie").getElementsByTagName("div");
//var len = movie_options.length;
tab(movie_options,movie_contens);

/*
//循环遍历给每一个li注册监听事件
for(var i = 0; i < len; i++){
	movie_options[i].index = i;
	//注册监听
	movie_options[i].onmouseover = function(){
		//alert(this.index);
		//1.动态改变div显示隐藏
		//(1).隐藏所有的div
		for(var j = 0; j< len; j++){
			movie_contens[j].style.display = "none";
		}
			
		//(2).显示当前的div
		movie_contens[this.index].style.display = "block";
		//2.动态改变li的样式
		for(var k = 0; k < len; k++){
			movie_options[k].className = "";
		}
		movie_options[this.index].className = "on";
		
	}
}
*/

//电影模块右边选项卡切换
var movie_top10_options = $("tab02").getElementsByTagName("li");
var movie_top10_contens = $("movie_top10").getElementsByTagName("ol");
tab(movie_top10_options,movie_top10_contens);



