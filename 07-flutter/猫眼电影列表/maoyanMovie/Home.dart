import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/widgets.dart';



import 'package:http/http.dart' as http;
import 'dart:convert';

// import './Tabs/My.dart';
// import './Home.dart';
// import './Tabs/YingYuan.dart';

class HomePage extends StatefulWidget {
  // int _currentIndex=0;
  // List _list=<Widget> [
  //   HomePage(),
  //   Yingyuan(),
  //   My()
  // ];
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with SingleTickerProviderStateMixin {  //1、配置动画切换效果
  TabController _controller;   // 2、TabBar配合控制器
  int _currentIndex=0;
  List _listData=[];
  @override
  void initState() {   // 3、初始化TabBar
    this.http1();
    // length  表示导航的个数，个数必须与TabBar个数相等  vsync表示渲染this,动画匹配
    _controller = TabController(length: 4,vsync: this);
    super.initState();
  }
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.white,
            title: TabBar(
              // indicatorPadding: EdgeInsets.zero,
              // labelPadding: EdgeInsets.only(left: 10),
              labelColor: Colors.grey,
              indicatorColor: Colors.red,
              indicatorSize: TabBarIndicatorSize.label,
              controller: _controller,  //4、配合控制器
              isScrollable: true,
          tabs: <Widget>[
            Tab(text: "北京"),
            Icon(Icons.arrow_drop_down,),
            Tab(text: "即将上映"),
            Tab(text: "正在热映"),
          ],
        ),
        leading: Icon(Icons.search,size: 20,color: Colors.red,),
        ),
        body: ListView.builder(
          itemCount: _listData.length,
          itemBuilder: (BuildContext context,int i){
            return Column(
              children: <Widget>[
                Row(
                  children: <Widget>[
                    Container(child: Image.network("https://p0.meituan.net/movie/c5975d98fc484027ff55d813ab3b2daa427032.jpg@464w_644h_1e_1c",width: 64,height: 90,),
                    ),
                    SizedBox(width: 7,),
                    // 内容
                    Container(
                      width: 200,
                      child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      // mainAxisAlignment: MainAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          '${_listData[i]["nm"]}',
                          style: TextStyle(fontSize: 16),
                          
                          ),
                        SizedBox(height: 4,),
                        Row(
                          children: <Widget>[
                              Text('${_listData[i]["wish"]}',style: TextStyle(fontSize: 14,color: Colors.orange,),),
                              Text("人想看",style: TextStyle(fontSize: 12,color: Colors.grey,)),
                          ],
                        ),
                        SizedBox(height: 4,),
                        Row(
                          // mainAxisSize: MainAxisSize.min,
                          children: <Widget>[
                            Text('演员:${_listData[i]["star"]}',style: TextStyle(fontSize: 12,color: Colors.grey,),maxLines: 1, overflow: TextOverflow.ellipsis,),
                          ],
                        ),
                        SizedBox(height: 4,),
                        Text('${_listData[i]["showInfo"]}',style: TextStyle(fontSize: 12,color: Colors.grey)),
                      ],
                    ),
                    ),
                    SizedBox(width: 10,),
                    // 按钮
                    Container(
                        width:70,
                        // margin: EdgeInsets.only(right: 15),
                        child: Column(
                          // crossAxisAlignment: CrossAxisAlignment.start,
                          // mainAxisAlignment: MainAxisAlignment.start,
                          children: <Widget>[
                            RaisedButton(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(7)
                          ),
                          child: Text("预售"),
                          color: Colors.blue,
                          textColor: Colors.white,
                          onPressed: (){},
                        ),
                          ],
                        )
                      ),
                  ],
                ),
                
                SizedBox(height:18),
              ],
            );
            // SizedBox(height:18),
          },
        ),

        bottomNavigationBar: BottomNavigationBar(
          fixedColor: Colors.purpleAccent,
          currentIndex: this._currentIndex,
          onTap: (int index ){
            this.http1();
            setState(() {
              this._currentIndex=index;
            });
          },
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.security),
              title: Text("电影"),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.sentiment_neutral),
              title: Text("影院"),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.mouse),
              title: Text("我的"),
            )
          ],
        ),
    );
  }

  http1() async {
     http.Response list = await http.get("http://m.maoyan.com/ajax/movieOnInfoList");
    //  print(list.body);
    Map<String,dynamic> listData=json.decode(list.body);
    // print(listData);
    setState(() {
     _listData=listData["movieList"];
    });
  }
}


