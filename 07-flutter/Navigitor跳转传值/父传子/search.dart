import 'package:flutter/material.dart';

import './form.dart';

class Search extends StatefulWidget {
  @override
  _SearchState createState() => _SearchState();
}

class _SearchState extends State<Search> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        RaisedButton(   // 启动按钮
          child: Text("跳转到分类页面"),
          onPressed: (){
          Navigator.of(context).push(
            MaterialPageRoute(   // 父中的数据传给子
            // 点击时跳到表单组建，把title传过去
              builder: (context)=>FormPage(title:"HELLO")
            )
          ) ;   
          },
        )
      ],
    );
  }
}