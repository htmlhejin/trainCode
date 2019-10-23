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
  List _list=[];
  int _page=1;

  // 钩子函数
  @override
  void initState() {
    this._getData();
    super.initState();
  }

  // 获取数据
  void _getData() async {
    var res= await Dio().get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=${_page}");
    if(res.statusCode==200){
      setState(() {
      _list=json.decode(res.data)["result"];
      });
    }else{}
  }

  // 下拉刷新，flutter内部有一个固定的控件 RefreshIndicator
  Future<void> _onRefresh() async {
    await Future.delayed(Duration(milliseconds:2000),(){  // Duration--持续时间   2秒
      // 下拉刷新时重新请求数据
      this._getData();
    });
  }
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
              itemCount: this._list.length,
              itemBuilder: (context,index){
                return ListTile(
                  title: Text("${this._list[index]['title']}"),
                );
              },
            )
          ): Text("加载中...")
      );
    }
  }