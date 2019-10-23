import 'package:flutter/material.dart';
import '../selfCount.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("计数器")),
      body: Count()
    );
  }
}