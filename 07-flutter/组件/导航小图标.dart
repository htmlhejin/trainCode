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

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 400,
      height:800,
      child: Row(  // Column  
        // mainAxisAlignment: MainAxisAlignment.start,   // Row 主轴的排列方式
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,   // 用的居多 
        // crossAxisAlignment: CrossAxisAlignment.start,  // 交叉轴的排列顺序  必须设置宽高对齐方式才有效啊
        children: <Widget>[
          IconContainer(Icons.search,color:Colors.red),
          IconContainer(Icons.home,color:Colors.blue),
          IconContainer(Icons.select_all,color:Colors.green),
        ],
      ),
    );
    }
}

class IconContainer extends StatelessWidget {
  double size=40.0;  // 图标的大小
  IconData icon;     // 定义icon
  Color color;      // 定义color
  // 接收数据需要重写方法
  IconContainer(this.icon,{this.color});
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100,
      height:100,
      decoration: BoxDecoration(color: Colors.yellow),
      child: Center(
        child: Icon(this.icon,size: this.size,color: this.color,),
      ),
    );
  }
}
