import 'package:flutter/material.dart';

class MyTopBar extends StatefulWidget {
  @override
  _MyTopBarState createState() => _MyTopBarState();
}

// SingleTickerProviderStateMixin配置动画切换效果
class _MyTopBarState extends State<MyTopBar> with SingleTickerProviderStateMixin {
  // TabBar组件需要配合控制器
  TabController _controller;

  @override
  // initState这个钩子对TabBar进行初始化
  void initState(){
    // length  表示导航的个数，个数必须与TabBar个数相等  vsync表示渲染this,动画匹配
    _controller=TabController(length: 8,vsync: this);
    super.initState();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: TabBar(   // 不再渲染文本。而是渲染TabBar，TabBar需要配合控制器_controller
          controller: _controller,   // 控制器
          indicatorColor: Colors.red,  // 下划线颜色
          labelColor: Colors.yellow,  // 图标颜色
          indicatorSize: TabBarIndicatorSize.label,  // 下划线的长短
          isScrollable: true,  // 导航可以滑动
          tabs: <Widget>[
            Tab(icon: Icon(Icons.directions_bike)),
            Tab(icon: Icon(Icons.directions_walk)),
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_car)),
          ],
        ),
      ),
      body: TabBarView(
        controller: _controller,
        children: <Widget>[
          SelfHomePage(page:1),
          SelfHomePage(page:2),
          SelfHomePage(page:3),
          SelfHomePage(page:3),
          SelfHomePage(page:3),
          SelfHomePage(page:3),
          SelfHomePage(page:3),
          SelfHomePage(page:3),
        ],
      )
    );
  }
}

 class SelfHomePage extends StatelessWidget {
   int page;
  //  重写方法的目的是接收参数
   SelfHomePage({Key key,this.page}) : super(key:key);
    @override
    Widget build(BuildContext context) {
      return Center(
        child: Text("第${page}页导航",style: TextStyle(fontSize: 40)),
      );
    }
  }