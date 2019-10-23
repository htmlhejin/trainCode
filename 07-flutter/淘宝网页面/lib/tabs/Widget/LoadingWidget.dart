  import 'package:flutter/material.dart';
  class LoadingWidget extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return Center(
        child: Padding(
          padding: EdgeInsets.all(10.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text("加载中...", style: TextStyle(fontSize: 16.0),),
              CircularProgressIndicator(
                strokeWidth: 2.0,  // 频宽
              )
            ],
          ),
        ),
      );
    }
  }
  
  // // 加载动画
  // Widget _getMoreWidget(){
  //   return Center(
  //     child: Padding(
  //       padding: EdgeInsets.all(10.0),
  //       child: Row(
  //         mainAxisAlignment: MainAxisAlignment.center,
  //         crossAxisAlignment: CrossAxisAlignment.center,
  //         children: <Widget>[
  //           Text("加载中...",style: TextStyle(fontSize: 16.0),),
  //           CircularProgressIndicator(
  //             strokeWidth: 2.0,   // 频宽
  //           )
  //         ],
  //       ),
  //     ),
  //   );
  // }