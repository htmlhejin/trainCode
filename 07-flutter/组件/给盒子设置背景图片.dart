import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库

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
        width: 200,
        height:200,  
        decoration: BoxDecoration(
          // color:Colors.red,
          // 给盒子设置背景图片
          image: DecorationImage(
            image: NetworkImage("http://img5.imgtn.bdimg.com/it/u=2667601884,4259186751&fm=26&gp=0.jpg")
          )
        ),
      ),
      
    );
  }
}
