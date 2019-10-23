import 'package:flutter/material.dart';
import './common/Storage.dart';


class StorageIndex extends StatefulWidget {
  @override
  StorageIndexState createState() => StorageIndexState();
}

class StorageIndexState extends State<StorageIndex> {
  String _username;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          RaisedButton(
            child: Text("设置数据"),
            onPressed: () async {
              // 类似于往数据库中保存数据
              await Storage.setString("name","wangcai");
            },
          ),
          RaisedButton(
            child: Text("获取数据"),
            onPressed: () async {
              var usename=await Storage.getString("name");
              this._username=usename;
              print(_username);
            },
          ),
          RaisedButton(
            child: Text("删除数据"),
            onPressed: () async {
              await Storage.remove("name");
            },
          ),
          Text("${this._username}"),
        ],
        
      )
    );
  }
}