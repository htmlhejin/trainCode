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
      child:Text(
        "hello flutter",
        style: TextStyle(
          color: Colors.yellowAccent,
          fontSize: 20,
        ),
      ),
      // 给div设置宽高等
      width: 200,
      height: 200,
      margin: EdgeInsets.fromLTRB(10, 10, 0, 0),
      padding: EdgeInsets.fromLTRB(5, 5, 5, 5),
      // 指定颜色需要有一个装饰器
      decoration: BoxDecoration(
        color: Colors.pink,    // 盒子的颜色
        border: Border.all(
          width: 5,   // 边框的宽度
          color: Colors.blue,    // 盒子边框的颜色
        ),
        borderRadius: BorderRadius.all(   // 设置圆角
          Radius.circular(10)   
        )
      ),
      alignment: Alignment.topCenter,   // 文本对齐方式
    );
  }
}
