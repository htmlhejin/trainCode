import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import '../maoyan/List.dart';

class TopBarPage extends StatefulWidget {
  @override
  _TopBarPageState createState() => _TopBarPageState();
}

class _TopBarPageState extends State<TopBarPage> with SingleTickerProviderStateMixin {
  TabController _controller;
  @override
  void initState() {
    _controller=TabController(length: 5,vsync: this);   // vsync必须配合with SingleTickerProviderStateMixin
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        title:TabBar(
          controller: _controller,
          labelColor: Colors.red,
          unselectedLabelColor: Colors.black,
          // labelStyle: TextStyle.SimSun,   // 字体样式
          indicatorColor: Colors.red,
          isScrollable: true,
          tabs: <Widget>[
            Tab(text: "北京",),
            Tab(icon: Icon(Icons.arrow_drop_down)),
            Tab(text: "正在热映",),
            Tab(text: "即将上映",),
            Tab(icon: Icon(Icons.search),)
          ],
          )
        ),
        body: TabBarView(
          controller: _controller,
          children: <Widget>[
            ListTile(
              title: Text("hello"),
            ),
            ListTile(
              title: Text("world"),
            ),
            ListPage(),
            ListTile(
              title: Text("world"),
            ),
            ListTile(
              title: Text("world"),
            ),
          ],
        ),
    );
  }
}