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
    return Stack(
      children: <Widget>[
        Container(
          width: 300,
          height: 400,
          color: Colors.red,   // 以第一个盒子为定位标准
          child: Stack(
            // 通过alignment直接定位，不需要用到内置插件
              alignment: Alignment.bottomRight,
            children: <Widget>[
              Container(    // 以第一个盒子为定位标准
              width: 170,
              height: 70,
              child: Text("hello"),
              color: Colors.blue,
              // child: Text("123"),
            )

              // Align方式
            //   Align(
            //     // widthFactor: 100,   // 宽度因子
            //     alignment: Alignment(0, 0),  // 以屏幕正中心为原点   // 以第一个盒子为定位标准
            //     child: Text("hello"),
            // ),
            //   Align(
            //       alignment: Alignment.bottomRight,
            //       child: Text("world"),
            //   )

            // Positioned方式
            // Positioned(     // 以第一个盒子为定位标准
            //   child:Icon(Icons.home),
            //   top: 40,
            //   left: 40,
            // ),
            // Positioned(
            //   child:Icon(Icons.search),
            //   right: 40,
            //   bottom: 40,
            //   width: 20,
            //   height: 20,
            // )



            
            ],
          ),
        )

        

        // Container(
        //   width: 160,
        //   height:160,
        //   color: Colors.red,
        //   child: Text("hello"),
        // ),
        // Container(
        //   width: 70,
        //   height:70,
        //   color: Colors.yellow,
        //   child: Text("world"),
        // ),
      ],
    );
  }
}