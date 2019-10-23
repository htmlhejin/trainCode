import 'package:flutter/material.dart';

class MaoyanTabBar extends StatefulWidget {
  @override
  _TabBarState createState() => _TabBarState();
}

class _TabBarState extends State<TabBar> with SingleTickerProviderStateMixin {
  TabController _controller;   // TabBar需要配合控制器
  @override
  void initState(){  // 这个钩子用来初始化TabBar
  _controller=TabController(length: 4,vsync: this);
  super.initState();
  }

  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.white,
            title: TabBar(
              labelColor: Colors.grey,
              indicatorColor: Colors.red,
              indicatorSize: TabBarIndicatorSize.label,
          controller: _controller,  //4、配合控制器
          tabs: <Widget>[
            Tab(text: "北京"),
            Tab(text: "即将上映"),
            Tab(text: "正在热映"),
          ],
        ),
        leading: Icon(Icons.search,size: 20,color: Colors.red,textDirection: TextDirection.rtl,),
        ),
        body: TabBarView(
          controller: _controller,
          children: <Widget>[
                ListView(
                  children: <Widget>[
                    ListTile(
                      title: Text("hello"),
                    ),
                    ListTile(
                      title: Text("world"),
                    ),
                  ],
                ),
                ListView(
                  children: <Widget>[
                    Column(
                      children: <Widget>[
                            Image.network("https://p0.meituan.net/128.180/movie/d5bc40a51534c26acbafd49c1dc484e24634457.jpg"),
                      ],
                    )
                  ],
                ),
                ListView(
                  children: <Widget>[
                    ListTile(
                      title: Text("hello"),
                    ),
                    ListTile(
                      title: Text("world"),
                    ),
                  ],
                ),
                
          ],
        )
    );
  }
}