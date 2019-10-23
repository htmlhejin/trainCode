import 'package:flutter/material.dart';
import '../tabs/Tabs.dart';
import '../tabs/extra/productList.dart';
import '../tabs/extra/search.dart';
import '../tabs/extra/productContent.dart';
import '../tabs/Login.dart';



final Routes={
  "/":(context)=>Tabs(),
  "/productList":(context,{arguments})=>ProductList(arguments: arguments,),
  "/search":(context,{arguments})=>SearchPage(arguments: arguments,),
  "/productContent":(context,{arguments})=>ProductContent(arguments: arguments,),
  "/login":(context)=>LoginPage(),
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
