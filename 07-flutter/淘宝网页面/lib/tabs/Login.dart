import 'package:flutter/material.dart';
import '../service/ScreenAdaper.dart';

class LoginPage extends StatelessWidget {
  // var _username=TextEditingController();
  // var _password;

  

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("用户登录入口")),
      body: Container(
        margin: EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
              Text("登录",style: TextStyle(fontSize: 20),),
              SizedBox(height: ScreenAdaper.height(30)),
              TextField(
                decoration: InputDecoration(
                  hintText: "请输入用户名",
                  border: OutlineInputBorder()
                  ),
                ),
              SizedBox(height: ScreenAdaper.height(20)),
              TextField(
                obscureText: true,
                decoration: InputDecoration(
                  hintText: "请输入密码",
                  // labelText: "密码",
                  border: OutlineInputBorder()
                  ),
                ),
                SizedBox(height: ScreenAdaper.height(50)),
                Container(
                  width: ScreenAdaper.width(180),
                  height: ScreenAdaper.height(100),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(20)
                  ),
                  child: RaisedButton(
                    color: Colors.blue,
                    child: Text("登录"),
                    onPressed: (){
                      Navigator.pushNamed(context, "/");
                    },
                  ),
                )
          ],
        ),
      )
    );
  }
}