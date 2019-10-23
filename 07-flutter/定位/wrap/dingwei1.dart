import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Dingwei extends StatefulWidget {
  @override
  _DingweiState createState() => _DingweiState();
}

class _DingweiState extends State<Dingwei> {
  @override
  Widget build(BuildContext context) {
    return Wrap(
      // alignment:WrapAlignment.spaceEvenly,
      // direction: Axis.horizontal,
      textDirection: TextDirection.ltr,
      // runAlignment: WrapAlignment.spaceEvenly,  // 垂直方向对齐方式
      // runSpacing: 40.0,   // 行与行的间隔
      spacing: 7.0,  
      children: <Widget>[
        RaisedButton(
           child: Text("第1集"),
           onPressed: (){},
        ),
        RaisedButton(
          child: Text("第2集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第3集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第4集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第5集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第6集"),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text("第7集"),
          onPressed: (){},
        ),
      ],
    );
       
  }
}