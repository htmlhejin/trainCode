import 'package:flutter/material.dart';
import '../views/form.dart';
import '../views/Tabs.dart';
import '../views/search.dart';
import '../date/datePicker.dart';

final Routes={
  "/":(context)=>Tabs(),
  "/form":(context,{arguments})=>FormPage(arguments:arguments),
  // "/search":(context)=>Search()   //不传值
  //              {arguments}解构出arguments
  "/search":(context,{arguments})=>Search(arguments:arguments),     // 传值
  "/datePicker":(context)=>DatePicker(),
};

// 如果你要把路由抽离出去，需要写下面这一堆的代码
var onGenerateRoute=(RouteSettings settings) {
      // 统一处理
      final String name = settings.name; 
      final Function pageContentBuilder = Routes[name];
      if (pageContentBuilder != null) {
        if (settings.arguments != null) {
          final Route route = MaterialPageRoute(
              builder: (context) =>
                  pageContentBuilder(context, arguments: settings.arguments));
          return route;
        }else{
            final Route route = MaterialPageRoute(
              builder: (context) =>
                  pageContentBuilder(context));
            return route;
        }
      }
};
