import 'package:flutter/material.dart';

import './home.dart';
import './category.dart';
import './setting.dart';

class Tabs extends StatefulWidget {
  Tabs({Key key}) : super(key:key);
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentIndex=0;  // 默认第一个被选中
  // 把三个导航放在一个容器中
  List _pageList=<Widget>[
    Home(),
    Category(),
    Setting()
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(title: Text("hello"),),
      body: this._pageList[this._currentIndex],
      // 底部导航
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: this._currentIndex,   //接收_currentIndex，设置默认第几个被选中
        onTap: (int index){
          // 通过setState改变当前状态
          setState(() {
            this._currentIndex=index;   // 点击时把当前索引赋给_currentIndex
          });
        },
        iconSize: 30.0,   // 图标的大小
        fixedColor: Colors.purpleAccent,  //点击选中时的颜色
        type: BottomNavigationBarType.fixed,   // 底部可以配置多个按钮
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text("首页")
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.category),
            title: Text("分类")
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            title: Text("设置")
          )
        ],
      ),
      // 侧边抽屉(导航)
      drawer: Drawer(   // 默认是左侧抽屉(导航)
        child: Column(
          children: <Widget>[
            ListTile(
              leading: CircleAvatar(
                  child: Icon(Icons.home),
                ),
              title: Text("我的空间"),          
            ),
            ListTile(
              leading: Icon(Icons.people),
              title: Text("用户中心"),          
            ),
            ListTile(
              leading: Icon(Icons.settings),
              title: Text("设置中心"),          
            ),
          ],
        )
      ),
      // endDrawer: Drawer(   // 右侧导航
      //   child: Column(
      //     children: <Widget>[
      //       ListTile(
      //         leading: Icon(Icons.search),
      //         title: Text("搜索"),
      //       )
      //     ],
      //   ),
      // ),   // 右侧抽屉(导航)
    );
  }
}