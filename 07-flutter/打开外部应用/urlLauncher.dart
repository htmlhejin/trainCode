import 'package:flutter/material.dart';
// 引入跳转到其他应用相关的包
import 'package:url_launcher/url_launcher.dart';

class UrlLauncher extends StatefulWidget {
  @override
  _UrlLauncherState createState() => _UrlLauncherState();
}

class _UrlLauncherState extends State<UrlLauncher> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(title: Text("外部应用"),),
       body:Column(
         children: <Widget>[
           RaisedButton(
             child: Text("打开浏览器"),
             onPressed: () async {
               const url="http://www.baidu.com";
               if(await canLaunch(url)){
                 await launch (url);
               }else{
                throw "can not launch $url";
               }
             }
           ),
           RaisedButton(
             child: Text("打开电话"),
             onPressed: () async {
               const tel="tel:10086";
               if(await canLaunch(tel)){
                 await launch (tel);
               }else{
                throw "can not launch $tel";
               }
             }
           ),
           RaisedButton(
             child: Text("发送短信"),
             onPressed: () async {
               const sms="sms:10086";
               if(await canLaunch(sms)){
                 await launch (sms);
               }else{
                throw "can not launch $sms";
               }
             }
           ),
           RaisedButton(
             child: Text("打开微信"),
             onPressed: () async {
               const url="weixin://";
               if(await canLaunch(url)){
                 await launch (url);
               }else{
                throw "can not launch $url";
               }
             }
           )
         ],
       )
    );
  }
}