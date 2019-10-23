import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'dart:convert';

class ListPage extends StatefulWidget {
  @override
  _ListPageState createState() => _ListPageState();
}

class _ListPageState extends State<ListPage> {
  List _list=[];

  @override
  void initState() {
    this._getData();
    super.initState();
  }

  _getData() async {
    var url="http://m.maoyan.com/ajax/movieOnInfoList";
    Response res= await Dio().get(url);
    // _list = json.decode(res.data)["movieList"];
    // print(res.data["movieList"][0]["nm"]);
    this._list=res.data["movieList"];
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child:ListView.builder(
        itemCount: _list.length,
        itemBuilder: (BuildContext context,int index){
          return Text("影名:${_list[index]['nm']}");
        },
      )
      // child: Text("hello"),
    );
  }
}