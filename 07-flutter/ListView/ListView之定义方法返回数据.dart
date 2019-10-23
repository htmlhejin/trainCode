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
    return [
      ListTile(
        title:Text("跟着总书记学历史 黄河之水天上来",
        maxLines: 1,
        overflow:TextOverflow.ellipsis,
        ),
      ),ListTile(
        title:Text("我的老师是网红—教育改革创新让学生们更爱上课",
        maxLines: 1,
        overflow:TextOverflow.ellipsis,)
      ),ListTile(
        title:Text("全国人大常委会关于授予国家勋章国家荣誉称号决定",
        maxLines: 1,
        overflow:TextOverflow.ellipsis,)
      ),ListTile(
        title:Text("培训前端培训前端培训前端培训前端培训前端",
        maxLines: 1,
        overflow:TextOverflow.ellipsis,)
      ),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: this._getData(),
    );
    }
}
