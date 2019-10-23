import 'package:flutter/material.dart';

import '../maoyanMovie/Home.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("flutter demo")),
      body: RaisedButton(
        child: Text("跳到弹出框"),
        onPressed: (){
          Navigator.pushNamed(context, "/dialog");
        },
      )
    );
  }
}