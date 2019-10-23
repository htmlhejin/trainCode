import 'package:flutter/material.dart';

import 'package:http/http.dart' as http;
import 'dart:convert';

class Http extends StatefulWidget {
  @override
  _HttpState createState() => _HttpState();
}

class _HttpState extends State<Http> {
  List _list=[];

  @override
  void initState()  {
    this._getData();
    super.initState();
  }
  _getData() async {
    var res=await http.get("https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0");
    if(res.statusCode==200){
      var res2=json.decode(res.body);
      setState(() {
      this._list=res2["subjects"]; 
      });
    }else{
      Text("请求失败");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(title:Text("请求并渲染数据")),
      body: Container(
        child: this._list.length>0 ? ListView.builder(  // 数据请求成功，渲染一个列表，把数据渲染出来
          itemCount: this._list.length,
          itemBuilder: (context,index){
            return ListTile(
              leading: Image.network("${this._list[index]['cover']}"),
              title: Text("${this._list[index]['title']}"),
            );
          },
        ) : Text("加载中...")
      ),
    );
  }
}