路由传值：
1、路由控件中  
     "/search":(context,{arguments})=>Search(arguments:arguments),     // 传值
2、跳转到某个控件时传递参数  
     Navigator.pushNamed(context, "/search",arguments: {"id":001});
3、到Search控件时接收参数   
    final arguments;
    Search({this.arguments});
    body: Text("${arguments['id']}"),

日期转换
使用flutter内置模块转换日期时不需要引入，直接使用，
 但是转换日期格式需要引入一个包，import 'package:date_format/date_format.dart';
 引入这个包，里面自动就有了showDatePicker,showTimePicker这两个控件，这两个控件用来修改日期、时间，然后通过调用一个方法将修改后的新的时间赋给原来的时间，
 showDatePicker(
      context:context,   //上下文，必须有
      initialDate: DateTime.now(),  // 初始时间
      firstDate: DateTime(1980),  
      lastDate: DateTime(2020)
 )
 showTimePicker(
     context: context,
     initialTime: _nowTime,   // 不能在这直接转化，因为在初始化器中只能访问静态成员
 );

 得到当前日期，DateTime r= dateTime.now()  ,转换成所需格式：formatDate(r,[yyyy,'年',mm,'月',dd])
 得到当前时间，var a = TimeOfDay.now()  ,转换成所需格式：a.format(context)
