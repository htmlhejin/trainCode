import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart'; // flutter中的UI库

void main() {
  runApp(MyApp());
}

// MaterialApp,AppBar,Container
// 定义一个无状态的组件，又叫静态组件，通过stf
class MyApp extends StatelessWidget {
  @override // 重写build方法
  Widget build(BuildContext context) {
    return MaterialApp(
      // home相当于vue中的render
      home: Scaffold(
        appBar: AppBar(title: Text("flutter")),
        body: HomeContent(), //渲染HomeContent组件
      ),
      theme: ThemeData(primarySwatch: Colors.purple),
    );
  }
}

// 自定义组件
class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
        child: Container(
      child: Image.network(
        "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3156704277,4221589279&fm=96",
        width: 200,
        height: 200,
        alignment: Alignment.centerLeft,
      ),
      width: 300,
      height: 300,
      decoration: BoxDecoration(
        color: Colors.yellowAccent,
        border: Border.all(
          width: 3,
          color: Color.fromRGBO(200, 200, 200, 1)
        ),
        borderRadius: BorderRadius.circular(100)
      ),
    )

    );
  }
}
