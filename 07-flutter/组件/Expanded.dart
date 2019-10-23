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
    return Container(
      width: 400,
      height:800,
      child: Row(  // Column  
        // mainAxisAlignment: MainAxisAlignment.start,   // Row 水平方向的排列方式
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,   // 用的居多 
        // crossAxisAlignment: CrossAxisAlignment.start,  // 也是在水平方向的排列顺序  必须设置宽高对齐方式才有效啊
        children: <Widget>[
          Expanded(     // 扩充组件
            flex: 1,   //占空比
            child: IconContainer(Icons.home,color: Colors.red,),
          ),
          Expanded(
            flex: 3,   // 占空较大
            child: IconContainer(Icons.search,color: Colors.blue,),
          )
        ],
      ),
    );
    }
}

class IconContainer extends StatelessWidget {
  double size=40.0;  // 图标的大小
  IconData icon;     // 定义icon
  Color color;      // 定义color
  IconContainer(this.icon,{this.color});
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100,
      height:100,
      margin: EdgeInsets.all(10),
      decoration: BoxDecoration(color: Colors.yellow),
      child: Center(
        child: Icon(this.icon,size: this.size,color: this.color,),
      ),
    );
  }
}
