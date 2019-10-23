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
  // 自定义一个方法，把数据返回，在ListView中调用方法即可得到数据   自定义的一般是私有方法，所以前面加_
  List<Widget> _getData(){
    List<Widget> list = new List();
    for(var i=0;i<=20;i++){
      list.add(
        ListTile(
          title:Text("这是第${i}条列表")  // {}中只有一个变量时，{}可以省略
        )
      );
    }
    return list;
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: this._getData(),
    );
    }
}
