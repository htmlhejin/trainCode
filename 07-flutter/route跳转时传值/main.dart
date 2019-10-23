import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库

import './routes/Routes.dart';



void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: "/",   // 设置默认访问路径
      onGenerateRoute:onGenerateRoute
    );
  }
}




