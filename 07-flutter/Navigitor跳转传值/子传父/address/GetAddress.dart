import 'package:flutter/material.dart';

import './AddressList.dart';

class GetAddress extends StatefulWidget {
  @override
  _GetAddressState createState() => _GetAddressState();
}


class _GetAddressState extends State<GetAddress> {
  String _ads="";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("获取收货地址")),
      body: Center(
        child: Column(
          children: <Widget>[
            RaisedButton(
              textTheme: ButtonTextTheme.normal,  // 按钮主题
              color: Theme.of(context).accentColor,
              child: Text("选择收货地址",style: TextStyle(color: Colors.blueAccent)),
              // 通过路由跳转从子页面传递数据，都是异步的
              // onPressed: () async{     // 点击按钮时请求数据
              //   var ads= await Navigator.of(context).push(
              //     MaterialPageRoute(
              //       builder: (BuildContext context){
              //         return AddressList();
              //         }
              //     )
              //   );
              //   // 固定写法，通过setState改变数据
              //   setState(() {
              //     _ads=ads;
              //   });
              // },
              onPressed: (){
                Navigator.of(context).push(
                   MaterialPageRoute(
                    builder: (BuildContext context){
                      return AddressList();
                      }
                  )
                ).then((res){
                  setState(() {
                   _ads=res ;
                  });
                });
              },
            ),
            Container(
              child: (Text("${_ads=='' ? '未找到数据' : _ads}")),
            )
          ],
        ),
      ),
    );
  }
}