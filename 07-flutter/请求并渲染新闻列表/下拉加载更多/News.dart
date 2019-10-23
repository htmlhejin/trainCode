import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:dio/dio.dart';

class News extends StatefulWidget {
  @override
  _NewsState createState() => _NewsState();
}

class _NewsState extends State<News> {
  // 定义变量
  List _list=[];  // _list表示的是一页的数据
  int _page=1;
  bool hasMore=true;  // 判断还有没有数据，用来实上拉加载更多
  final arguments;
  _NewsState({this.arguments})
  ScrollController _scrollController=new ScrollController();

  // 钩子函数
  @override
  void initState() {
    this._getData();
    super.initState();
    // 监听滚动条事件
    _scrollController.addListener((){
      // print(_scrollController.position.pixels.toInt());   // 滚动条下拉距离
      // print(_scrollController.position.maxScrollExtent.toInt());   // 整个页面的高度
      if(_scrollController.position.pixels.toInt()==_scrollController.position.maxScrollExtent.toInt()){
          this._getData();   // 拉到底部时，重新请求数据
      }
    });
  }

  // 获取数据
  void _getData() async {
    if(this.hasMore){                                                               // 一页有20条
      var res= await Dio().get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=${_page}");
      if(res.statusCode==200){
        var res2=json.decode(res.data)["result"];  // 得到转换后的数据，每页20条
        setState(() {
          _list.addAll(res2) ;   // 数据请求成功，把数据添加到_list中
          _page++;
        });
        if(res2.length<20){  //  表示是最后一页
          setState(() {
            this.hasMore=false;
        });
        } 
      }else{}  // 没有数据
    }
  }

  // 下拉刷新，flutter内部有一个固定的控件 RefreshIndicator
  Future<void> _onRefresh() async {
    await Future.delayed(Duration(milliseconds:2000),(){  // Duration--持续时间   2秒  milliseconds--毫秒
      // 下拉刷新时重新请求数据
      this._getData();
    });
  }

  // 上划加载更多   flutter内部没有实现上拉加载更多的组件，ListView中有一个ScrollController属性,通过ScrollController可以实现上拉加载更多

  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("新闻列表"),
        ),
        body: this._list.length>0 ? 
          RefreshIndicator(   // 下拉刷新
            onRefresh: _onRefresh,
            child:  ListView.builder(
              controller: _scrollController,
              itemCount: this._list.length,  //20
              itemBuilder: (context,index){  //  index 19
                if(index==this._list.length-1){  // 拉到底,可以渲染一个加载动画
                  return Column(
                    children: <Widget>[
                      ListTile(
                        title: Text("${this._list[index]['title']}",maxLines: 1,overflow: TextOverflow.ellipsis,),
                        onTap: (){
                          Navigator.pushNamed(context, "/NewsContent",{
                            arguments:"${this._list[index]['aid']}"
                          });
                        },
                      ),
                      Divider(),  //表示分界线
                      _getMoreWidget()
                    ],
                  );
                }else{   // 没有拉到底，正常渲染数据
                  return Column(
                      children: <Widget>[
                        ListTile(
                          title: Text("${this._list[index]['title']}",maxLines: 1,overflow: TextOverflow.ellipsis,),
                        ),
                        Divider()
                      ],
                    );
                }
              },
            )
          ): _getMoreWidget()
      );
    }
    // 加载动画
    Widget _getMoreWidget(){
      if(hasMore){   // 有数据，加载一个动画
        return Center(
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Text("加载中..."),
                CircularProgressIndicator(   // 加载的小圆圈   Indicator指示器的意思
                  strokeWidth: 1.0,   // 频宽
                )
              ],
            ),
          ),
        );
      }else{   // 上拉加载更多时没有数据了
        return Center(
          child: Text("我是有底线的..."),
        );
      }
    }
  }