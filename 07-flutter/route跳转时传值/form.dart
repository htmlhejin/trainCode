import 'package:flutter/material.dart';

class FormPage extends StatelessWidget {
  final arguments;
  // 传过来的title是一个对象，所以用{}
  FormPage({this.arguments});   // this.title默认是mm,如果父组件传递了title，则this.title是传递过来的值
  // FormPage({this.title="xxx"});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("${arguments['title']}"),
      ),
      floatingActionButton: FloatingActionButton(  // 浮动按钮
        child: Text("返回"),
        onPressed: (){   
          Navigator.of(context).pop();   // pop表示返回上一级  弹出
        },
      ),
      body: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text("表单1"),
            Text("表单2"),
            Text("表单3"),
          ],
        )
        ],
      )
    );
  }
}