import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库

// 引入Dio模块
// import './请求数据/DioRequest.dart';

// import './views/Tabs.dart';

// import './views/MyTopBar.dart';
import './maoyanMovie/Home.dart';

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
        appBar: AppBar(title: Text("猫眼电影",),centerTitle: true,),
        body: HomeContent(), //渲染HomeContent组件
      ),
      theme: ThemeData(primarySwatch: Colors.red),
    );
  }
}

// 自定义组件
class HomeContent extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Container(
      // child: DioRequest(),
      child: Home(),
    );
    }
}



