import 'package:flutter/material.dart';

class Search extends StatelessWidget {
  final arguments;
  Search({this.arguments});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("搜索页面"),),
      body: Text("${arguments['id']}"),
    );
  }
}