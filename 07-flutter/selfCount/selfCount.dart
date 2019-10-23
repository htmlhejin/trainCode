import 'package:flutter/material.dart';

class Count extends StatefulWidget {

  
  @override
  _CountState createState() => _CountState();
}

class _CountState extends State<Count> {
  var _count=0;
  add(){
    setState(() {
      _count=_count+1; 
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(title:Text("计数器")),
      body: Container(
        child: Column(
          children: <Widget>[
            Text("点击加1"),
            Text("${_count}"),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: (){
          add();
        },
      ),
    );
  }
}
