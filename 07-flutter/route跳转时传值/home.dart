import 'package:flutter/material.dart';
import './category.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Center(
        child: RaisedButton(
          child: Text("点击跳到搜索页面"),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(7)
          ),
          color: Colors.purple[300],
          textColor: Colors.white,
          onPressed: (){
            Navigator.pushNamed(context, "/search",arguments: {"id":001});
          },
        ),
      );
  }
}