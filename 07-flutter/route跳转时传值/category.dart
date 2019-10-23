import 'package:flutter/material.dart';



class Category extends StatefulWidget {
  @override
  _CategoryState createState() => _CategoryState();
}

class _CategoryState extends State<Category> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("分类页面"),),
      body: Center(
      child:RaisedButton(
        child: Text("跳转到表单页面"),
        onPressed: (){
          Navigator.pushNamed(context, "/form",arguments: {"title":"表单页面"});
          }
        )
      ),
    );
  }
}