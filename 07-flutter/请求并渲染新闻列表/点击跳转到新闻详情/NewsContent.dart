import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
// 引入flutter_inappbrowser这个包解析文本内容，解析成不带标签的文本样式
import 'package:flutter_inappbrowser/flutter_inappbrowser.dart';  // Android: minSdkVersion 17

class NewsContent extends StatefulWidget {
  // 接收控件传递过来的参数
  Map arguments;
  NewsContent({this.arguments});
  
  @override
  _NewsContentState createState() => _NewsContentState(this.arguments);
}

class _NewsContentState extends State<NewsContent> {
  Map arguments;
  _NewsContentState(this.arguments);
  // 定义一个空数组存放数据
  List _list=[];
  // 定义一个变量为true,表示有内容
  bool _flag=true;
  
  @override
  void initState() {
    this._getData();
    super.initState();
  }

  // 请求新闻详情数据
  void _getData() async {
    // 根据aid去请求新闻详情
    http.Response res= await http.get("http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=${this.arguments['aid']}");
    setState(() {
      _list=json.decode(res.body)["result"];
    });
    // print(json.decode(res.body)["result"]);
    print("...");
  }

  @override
  Widget build(BuildContext context) {
    // return Container(
    //   // child: Text("hello"),
    //   child: Text("${this._list[0]['content']}"),  
      // 渲染出来的是带有标签的内容，而有的标签fultter也不认识，flutter有一个专门的控件InAppWebView可以解析flutter不能识别的标签，解析成文本，需要安装下载
    // );
    return Scaffold(
      appBar: AppBar(
        title: Text("新闻详情"),
      ),
      body: Column(
        children: <Widget>[
          // 显示详情之前来个加载动画
          this._flag ? _getMoreWidget() : Text("r"),
          Expanded(
            child: InAppWebView(
              initialUrl: "http://www.phonegap100.com/newscontent.php?aid=${this.arguments["aid"]}",
              onProgressChanged: (InAppWebViewController controller, int progress){
                print(progress/100);
                if((progress/100).toInt()==1){   // 划到底
                  setState(() {
                     this._flag = false; 
                    });
                }
              },
            )
          )
        ],
      ),
    );
  }
  // 加载动画
  Widget _getMoreWidget(){
    return Center(
      child: Padding(
        padding:  EdgeInsets.all(10.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text("加载中..."),
            CircularProgressIndicator(
              strokeWidth:2.0
            )
          ],
        ),
        ),
      );
  }
}