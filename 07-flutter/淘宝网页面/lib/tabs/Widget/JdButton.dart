import 'package:flutter/material.dart';
import '../../service/ScreenAdaper.dart';

class JdButton extends StatelessWidget {

  final Color color;
  final String text;
  final Object cb;
  JdButton({this.color=Colors.black,this.text="按钮",this.cb=null});

  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context);
    return InkWell(
        onTap: this.cb,
        child: Container(
          decoration: BoxDecoration(
            color: this.color,
          ),
          child: Center(
            child: Text("$text",style: TextStyle(color: Colors.white,),
          ),
        ),
      )
    );
  }
}