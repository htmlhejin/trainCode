import 'package:flutter/material.dart';

import 'package:http/http.dart' as http;
import 'dart:convert';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List _list=[];
  void _getDate() async {
    var apiUrl="http://m.maoyan.com/ajax/movieOnInfoList";
    var response= await http.get(apiUrl);
    // print(response.body);
    var newResponse=json.decode(response.body);
    // print(newResponse);
    // print(newResponse["movieList"][0]["nm"]);  // 决胜时刻
    if(response.statusCode==200){
      setState((){
        this._list=newResponse["movieList"];
      });
    }
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("flutter demo")),
      body: Column(
        children: <Widget>[
          // Text("${this._list}"),
          RaisedButton(
          child: Text("get请求数据"),
          onPressed: _getDate,
        ),
          RaisedButton(
            child: Text("请求并渲染数据"),
            onPressed:(){
              Navigator.pushNamed(context, "/http");
            },
          ),
          RaisedButton(
            child: Text("跳转到新闻页面"),
            onPressed:(){
              Navigator.pushNamed(context, "/news");
            },
          ),
        ],
        
      )
      
    );
  }
}