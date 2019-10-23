import 'package:flutter/material.dart';


class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("轮播图")),
      body: RaisedButton(
        child: Text("跳到轮播图组件"),
        onPressed:(){
           Navigator.pushNamed(context, "/Swiper");
        },
      )
    );
  }
}