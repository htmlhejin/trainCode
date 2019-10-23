import 'package:flutter/material.dart';

class FormPage extends StatelessWidget {
  String title;
  // 接收数据时重写一个方法
  // 传过来的title是一个对象，所以用{}
  FormPage({this.title="mm"});   // this.title默认是mm,如果父组件传递了title，则this.title是传递过来的值
  // FormPage({this.title="xxx"});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text( this.title),),
      // 浮动按钮
      floatingActionButton: FloatingActionButton(
        child: Text("返回"),
        onPressed: (){   
          Navigator.of(context).pop();   // pop表示返回上一级     弹出
        },
      ),
      body: Text("body"),
    );
  }
}