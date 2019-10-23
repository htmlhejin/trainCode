import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库
import '../listData.dart';

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
  List<Widget>  _getData(){
   var tempList = listData.map((value){
     return Container(
       height: 100,
       decoration: BoxDecoration(
         border:Border.all(
           color:Colors.red
         )
       ),
       child: Column(
         children: <Widget>[
           Image.network(value["imageUrl"],width: 60,height: 60,),
           Text("hello")
         ],
       ),
     );
    });
    return tempList.toList();
  }
  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 2,   // 一行有两个
      crossAxisSpacing: 10,   // 列与列之间的距离
      mainAxisSpacing: 10,   // 行与行之间的距离
      padding: EdgeInsets.all(10),
      // childAspectRatio: 2,   // 宽高比，默认是1
      children: this._getData()
    );
    }
}
