/*--------------------选项卡切换效果js-------------------*/

/*-------------今日快报---------------*/
var bulletin_title = $("bulletin_title").getElementsByTagName("li");
var bulletin_contents = $("bulletin_contents").getElementsByTagName("div");
tab(bulletin_title,bulletin_contents);

/*-------------全球抢先看.片花---------------*/
var global_tab_options = $("global_tab_options").getElementsByTagName("li");
var global_tab_contents = $("global_tab").getElementsByTagName("ol");
tab(global_tab_options,global_tab_contents);

/*-------------电影---------------*/
//左侧选项卡切换
var satisfy_options = $("satisfy_options").getElementsByTagName("li");
var satisfy_contens = $("satisfy").getElementsByTagName("ol");
tab(satisfy_options,satisfy_contens);

//中间选项卡切换
var movie_options = $("content_movie").getElementsByTagName("li");
var movie_contens = $("content_movie").getElementsByTagName("div");
//var len = movie_options.length;
tab(movie_options,movie_contens);


//右边选项卡切换
var movie_top10_options = $("tab02").getElementsByTagName("li");
var movie_top10_contens = $("movie_top10").getElementsByTagName("ol");
tab(movie_top10_options,movie_top10_contens);

/*----------------电视剧---------------*/
//中间选项卡切换
var tv_options = $("content_tv").getElementsByTagName("li");
var tv_contens = $("content_tv").getElementsByTagName("div");
//var len = movie_options.length;
tab(tv_options,tv_contens);


//右边选项卡切换
var tv_tab_options = $("tv_tab_options").getElementsByTagName("li");
var tv_tab_contents = $("tv_tab").getElementsByTagName("ol");
tab(tv_tab_options,tv_tab_contents);

/*-----------综艺------------*/
//用户关注度
var satisfy_zy_options = $("satisfy_zy_options").getElementsByTagName("li");
var satisfy_zy_contents = $("satisfy_zy").getElementsByTagName("ol");
tab(satisfy_zy_options,satisfy_zy_contents);
//排行榜
var zy_tab_options = $("zy_tab_options").getElementsByTagName("li");
var zy_tab_contents = $("zy_tab").getElementsByTagName("ol");
tab(zy_tab_options,zy_tab_contents);


/*-----------动漫------------*/
//用户关注度
var satisfy_dm_options = $("satisfy_dm_options").getElementsByTagName("li");
var satisfy_dm_contents = $("satisfy_dm").getElementsByTagName("ol");
tab(satisfy_dm_options,satisfy_dm_contents);
//排行榜
var dm_tab_options = $("dm_tab_options").getElementsByTagName("li");
var dm_tab_contents = $("dm_tab").getElementsByTagName("ol");
tab(dm_tab_options,dm_tab_contents);

/*-----------纪录片------------*/
var record_tab_options = $("record_tab_options").getElementsByTagName("li");
var record_tab_contentes = $("record_tab").getElementsByTagName("ol");
tab(record_tab_options,record_tab_contentes);

/*-----------视频快报，娱乐爆料------------*/
//视频快报
var vedio_tab_options = $("vedio_tab_options").getElementsByTagName("li");
var vedio_tab_contents = $("vedio_tab").getElementsByTagName("ol");
tab(vedio_tab_options,vedio_tab_contents);
//娱乐爆料
var entertainment_tab_options = $("entertainment_tab_options").getElementsByTagName("li");
var entertainment_tab_contents = $("entertainment_tab").getElementsByTagName("ol");
tab(entertainment_tab_options,entertainment_tab_contents);

/*-----------超清下载，会员专区------------*/
var vip_tab_options = $("vip_tab_options").getElementsByTagName("li");
var vip_tab_contents = $("vip_tab").getElementsByTagName("ol");
tab(vip_tab_options,vip_tab_contents);









