import 'package:flutter/material.dart';

import 'package:http/http.dart' as http;

import 'dart:convert';   // 引入该模块，自动有一个json.decode方法，将字符串转成对象

class SelfHttpRequest extends StatefulWidget {
  @override
  _SelfHttpRequestState createState() => _SelfHttpRequestState();
}

class _SelfHttpRequestState extends State<SelfHttpRequest> {
  List _list=[];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("http请求数据")),
      body: ListView.builder(  // 创建一个数组
        itemCount:_list.length,
        itemBuilder: (BuildContext context,int i){
          return Text('${_list[i]["nm"]}');
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: (){
          http1();
        },
      ),
    );
  }
  // 自定义一个方法
http1() async {
  String url="http://m.maoyan.com/ajax/movieOnInfoList";
  http.Response response = await http.get(url);
  // print(response.body);   //  得到原始数据
  // 固定写法，String是键的类型，dynamic表示值的类型不确定，可能是字符串，也可能是数组
  // Map相当于js中的对象
  Map<String,dynamic> responseData=json.decode(response.body);  // json.decode把原始数据转成对象
  // print(responseData);
  setState(() {
   _list= responseData["movieList"];
  });
  }
}




