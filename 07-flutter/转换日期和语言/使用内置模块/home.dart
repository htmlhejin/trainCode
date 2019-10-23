import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  DateTime _nowDate=DateTime.now();
  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                RaisedButton(
                child: Text("处理日期格式(使用内置模块)"),
                color: Colors.orange,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(7)
                ),
                onPressed: (){
                  Navigator.pushNamed(context,"/datePicker");
                },
              ),
              Icon(Icons.arrow_drop_down)
                ],
            )
          ],
        )
        );
  }
}