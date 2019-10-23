路由传值：
1、路由控件中  
     "/search":(context,{arguments})=>Search(arguments:arguments),     // 传值
2、跳转到某个控件时传递参数  
     Navigator.pushNamed(context, "/search",arguments: {"id":001});
3、到Search控件时接收参数   
    final arguments;
    Search({this.arguments});
    body: Text("${arguments['id']}"),

