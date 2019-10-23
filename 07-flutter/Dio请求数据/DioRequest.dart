import 'package:flutter/material.dart';

import 'package:dio/dio.dart';

import 'dart:convert';

class DioRequest extends StatefulWidget {
  @override
  _DioRequestState createState() => _DioRequestState();
}

class _DioRequestState extends State<DioRequest> {
  List _list = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Dio请求数据")),
      body: Container(
        child: ListView.builder(
          itemCount: _list.length,
          itemBuilder: (BuildContext context,int i){
            return Text('${_list[i]["nm"]}');
          },  
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed:(){ this.dio1();},
      ),
    );
  }

  // 定义方法请求数据
  dio1() async {
    Response response =
     //Dio()相当于Dio dio = new Dio();
        await Dio().get("http://m.maoyan.com/ajax/movieOnInfoList");
    // print(response);  // 原始数据
    Map<String, dynamic> responseData =
        json.decode(response.toString()); //json.decode把字符串转成对象
    // print(responseData);
    setState(() {
      _list = responseData["movieList"];
    });
  }
}
