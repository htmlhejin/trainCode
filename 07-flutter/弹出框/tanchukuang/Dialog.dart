import 'package:flutter/material.dart';
// 引入第三方的弹出框模块
import 'package:fluttertoast/fluttertoast.dart';

class DialogDemo extends StatefulWidget {
  @override
  _DialogDemoState createState() => _DialogDemoState();
}

class _DialogDemoState extends State<DialogDemo> {

  // 弹出框按钮
  void _alertDialog() async {
    // 显示一个小页面，判断确定，取消
    var result = await showDialog(   // 点击之后最终有一个终值，
      context: context,
      builder: (context){
        return AlertDialog(  // 返回确定取消形式的弹出框
          title: Text("提示信息"),
          content: Text("你确定要退出吗?"),
          actions: <Widget>[
            FlatButton(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(7)
              ),
              color: Colors.green,
              child: Text("确定"),
              onPressed: (){
                Navigator.pop(context,"ok");  // ok则是result的值
              },
            ),
            FlatButton(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(7)
              ),
              color: Colors.red,
              child: Text("取消"),
              onPressed: (){
                Navigator.pop(context,"cancle");   // cancle则是result的值
              },
            )
          ],
        );
      },
    );
    //  print(result);  // cancle
  }

  // 简单的选项弹出框，选择A,选择B
  void _simpletDialog() async {
    await showDialog(
      context: context,
      builder: (context){
        return SimpleDialog(
          title: Text("选择内容"),
          children: <Widget>[
            SimpleDialogOption(
              child: Text("选择A"),
              onPressed:(){
                Navigator.pop(context,"A");
              }
            ),
            SimpleDialogOption(
              child: Text("选择B"),
              onPressed: (){
                Navigator.pop(context,"B");
              },
            )
          ],
        );
      }
    );
  }

  // 底部弹出框
  void _modalBottomSheet() async {
    await showModalBottomSheet(
      context: context,
      builder: (context){
        return Container(
          child: Column(
            children: <Widget>[
              ListTile(  
                title: Text("分享到朋友圈"),
                onTap: (){
                  Navigator.pop(context);
                }
              ),
              ListTile(
                title: Text("分享到微博"),
                onTap: (){
                  Navigator.pop(context);
                }
              )
            ],
          ),
        );
      }
    );
  }

  // 第三方弹出框
  void _toast() async {
    Fluttertoast.showToast(
        msg: "This is Center Short Toast",
        toastLength: Toast.LENGTH_SHORT,
        gravity: ToastGravity.CENTER,
        timeInSecForIos: 1,
        backgroundColor: Colors.red,
        textColor: Colors.white,
        fontSize: 16.0
    );
  }

  @override
  
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("弹出框控件")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              child: Text("AlertDialog"),
              onPressed: _alertDialog,
            ),
            RaisedButton(
              child: Text("SimpleDialog"),
              onPressed: _simpletDialog,
            ),
            RaisedButton(
              child: Text("showModalBottomSheet"),
              onPressed: _modalBottomSheet,
            ),
            RaisedButton(
              child: Text("第三方弹出框"),
              onPressed: _toast,
            ),
          ],
        ),
      )
    );
  }
}