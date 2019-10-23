import 'package:flutter/material.dart';
import './category.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child:Column(
        children: <Widget>[
          RaisedButton(
            child: Text("跳转到分类页面"),
            onPressed: (){
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder:(context)=>Category()
                )
              );
            },
          )
        ],
      )
    );
  }
}