import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';   // flutter中的UI库


void main(){
  runApp(MyApp());
}
// MaterialApp,AppBar,Container
// 定义一个无状态的组件，又叫静态组件，通过stf   
class MyApp extends StatelessWidget {
  @override  // 重写build方法
  Widget build(BuildContext context) {
    return MaterialApp(
      // home相当于vue中的render
      home: Scaffold(
        appBar: AppBar(title: Text("flutter")),
        body: HomeContent(),  //渲染HomeContent组件
      ),
      theme: ThemeData(
        primarySwatch: Colors.purple
      ),
    );
  }
}

// 自定义组件
class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(  // Container相当于一个div
      child: Text(
        "hello flutter hello flutter hello flutter hello flutter hello flutter",
         overflow: TextOverflow.ellipsis,
        //  overflow: TextOverflow.fade
         textDirection: TextDirection.rtl,   // 右上左   ltr  左上右

         textScaleFactor: 1,  // 文本缩放  2表示扩大2被
        //  textDirection: ,
         style: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.w800,
          color:Color.fromRGBO(255, 0, 0, 1),
          letterSpacing: 3,
          fontStyle: FontStyle.italic,   // 倾斜
          decoration: TextDecoration.lineThrough,  // 删除线
          decorationColor:Colors.black,
          decorationStyle: TextDecorationStyle.dashed,
        ),
      ),
    );
  }
}
