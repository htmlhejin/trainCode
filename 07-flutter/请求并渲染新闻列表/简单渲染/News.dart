import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:dio/dio.dart';

class News extends StatefulWidget {
  @override
  _NewsState createState() => _NewsState();
}

class _NewsState extends State<News> {
  List _list=[];
  int _page=1;
  @override
  void initState() {
    this._getData();
    super.initState();
  }
  void _getData() async {
    var res= await Dio().get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=${_page}");
    if(res.statusCode==200){
      setState(() {
      _list=json.decode(res.data)["result"];
      });
    }else{}
  }

  // 下拉刷新，flutter内部有一个固定的控件 RefreshIndicator

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("新闻列表"),
        ),
        body: this._list.length>0 ? ListView.builder(
          itemCount: this._list.length,
          itemBuilder: (context,index){
            return Column(
              children: <Widget>[
                ListTile(
                  title: Text("${this._list[index]['title']}",maxLines: 1,overflow: TextOverflow.ellipsis)
                )
              ],
            );
          },
        ): Text("加载中")
      );
    }
  }