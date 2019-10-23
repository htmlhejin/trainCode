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
      // padding: EdgeInsets.all(10),   //里面没有margin  
      padding: EdgeInsets.fromLTRB(0, 0, 0, 20),
      children: <Widget>[
        ListTile(
          leading:Image.asset("images/flower.jpg"),
          title: Text("地方考察中，习近平频频强调这件事",
            style: TextStyle(fontSize: 18,color: Colors.redAccent,),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          ),
          // 二级标题
          subtitle: Text("中国必须搞实体经济，制造业是实体经济的重要基础，自力更生是我们奋斗的基点",
            style: TextStyle(fontSize: 12,color: Colors.grey,),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          ),
        ),ListTile(
          leading: Image.asset("images/flower.jpg"),
          title: Text("地方考察中，习近平频频强调这件事",
            style: TextStyle(fontSize: 18,color: Colors.redAccent,),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          ),
          // 二级标题
          subtitle: Text("中国必须搞实体经济，制造业是实体经济的重要基础，自力更生是我们奋斗的基点",
            style: TextStyle(fontSize: 12,color: Colors.grey,),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          ),
        ),ListTile(
          leading: Image.asset("images/flower.jpg"),
          title: Text("地方考察中，习近平频频强调这件事",
            style: TextStyle(fontSize: 18,color: Colors.redAccent,),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          ),
          // 二级标题
          subtitle: Text("中国必须搞实体经济，制造业是实体经济的重要基础，自力更生是我们奋斗的基点",
            style: TextStyle(fontSize: 12,color: Colors.grey,),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          ),
        ),ListTile(
          leading: Image.asset("images/flower.jpg"),
          title: Text("地方考察中，习近平频频强调这件事",
            style: TextStyle(fontSize: 18,color: Colors.redAccent,),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          ),
          // 二级标题
          subtitle: Text("中国必须搞实体经济，制造业是实体经济的重要基础，自力更生是我们奋斗的基点",
            style: TextStyle(fontSize: 12,color: Colors.grey,),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          ),
        )
      ],
    );
  }
}
