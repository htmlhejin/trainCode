import 'package:flutter/material.dart';

import './home.dart';
import './search.dart';
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
    Search(),
    Setting()
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("hello"),),
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
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text("首页")
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            title: Text("搜索")
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            title: Text("设置")
          ),
        ],
      ),
    );
  }
}