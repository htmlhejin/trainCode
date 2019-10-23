import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
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
    return ListView(   // 可以渲染列表，里面有一个固定的组件,ListTile
      padding: EdgeInsets.all(10),   //里面没有margin  
      children: <Widget>[
        Image.asset("images/flower.jpg",width: 200,height: 100,),
        Container(
          child: Text("88年前的这一天，我们永远铭记！",
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(fontSize: 16),
          ),
          height:60,
          padding: EdgeInsets.fromLTRB(5, 10, 5, 10),
        ), Image.asset("images/flower.jpg",height: 100,),
        Container(
          child: Text("88年前的这一天，我们永远铭记！",
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(fontSize: 16),
          ),
          height:60,
          padding: EdgeInsets.fromLTRB(5, 10, 5, 10),
        ), Image.asset("images/flower.jpg",height: 100,),
        Container(
          child: Text("88年前的这一天，我们永远铭记！",
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(fontSize: 16),
          ),
          height:60,
          padding: EdgeInsets.fromLTRB(5, 10, 5, 10),
        ), Image.asset("images/flower.jpg",height: 100,),
        Container(
          child: Text("88年前的这一天，我们永远铭记！",
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(fontSize: 16),
          ),
          height:60,
          padding: EdgeInsets.fromLTRB(5, 10, 5, 10),
        )
      ],
    );
  }
}
