import 'package:flutter/material.dart';
import '../views/form.dart';
import '../views/Tabs.dart';
import '../views/search.dart';
import '../date/datePicker.dart';
import '../date/datePickerPub.dart';
import '../Swiper.dart';
import '../tanchukuang/Dialog.dart';
import '../Http.dart';
import '../News.dart';
import '../NewsContent.dart';
import '../urlLauncher.dart';
import '../Device.dart';
// import '../ImagePicker.dart';
import '../Location.dart';
import '../dingwei1.dart';
import '../vedio.dart';
import '../Network.dart';
import '../Storage.dart';


final Routes={
  "/":(context)=>Tabs(),
  "/form":(context,{arguments})=>FormPage(arguments:arguments),
  // "/search":(context)=>Search()   //不传值
  //              {arguments}解构出arguments
  "/search":(context,{arguments})=>Search(arguments:arguments),     // 传值
  "/datePicker":(context)=>DatePicker(),
  "/datePickerPub":(context)=>DatePickPubDemo(),
  "/Swiper":(context)=>SwiperDemo(),
  "/dialog":(context)=>DialogDemo(),
  "/http":(context)=>Http(),
  "/news":(context)=>News(),
  "/newsContent":(context,{arguments})=>NewsContent(arguments:arguments),
  "/urlLauncher":(context)=>UrlLauncher(),
  "/device":(context)=>Device(),
  // "/imagePicker":(context)=>ImagePicker(),
  "/location":(context)=>Location(),
  "/dingwei":(context)=>Dingwei(),
  "/vedio":(context)=>Vedio(),
  "/network":(context)=>NetWork(),
  "/storageIndex":(context)=>StorageIndex(),
  
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
