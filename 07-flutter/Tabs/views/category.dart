import 'package:flutter/material.dart';
class Category extends StatefulWidget {
  @override
  _CategoryState createState() => _CategoryState();
}

class _CategoryState extends State<Category> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("分类页面")),
      body: Center(
        child: Text("分类页面主体部分",
          style: TextStyle(
            fontSize: 40
          ),
        ),
      ),
    );
  }
}