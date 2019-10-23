import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/widgets.dart';
import '../../service/ScreenAdaper.dart';
import '../../service/SsearchService.dart';

class SearchPage extends StatefulWidget {
  SearchPage({Key key, arguments}) : super(key:key);
  @override
  _SearchPageState createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  var _keyWords;

  List _historyData=[];   //存放历史数据
  @override
  void initState() {
    _getHistoryData();
    super.initState();
  }

  _getHistoryData() async {
     var res= await SearchServices.getHistoryList();
     setState(() {
      _historyData= res;
      });
  }

  // 弹出框
  _showAlertDialog(keywords)async {
    await showDialog(
      barrierDismissible: true,   // 点击灰色背景时弹框是否消失
      context: context,
      builder: (context){
        return AlertDialog(
          title: Text("提示信息"),
          content: Text("你确定要删除吗?"),
          actions: <Widget>[
            FlatButton(
              color: Colors.red,
              textColor: Colors.white,
              child: Text("确定"),
              onPressed:() async {
                await SearchServices.removeHistoryData(keywords);
                this._getHistoryData();
                Navigator.pop(context,"ok");
              },
            ),
            FlatButton(
              color: Colors.green,
              textColor: Colors.white,
              child: Text("取消"),
              onPressed:(){
                 Navigator.pop(context,"cancle");
              },
            )
          ],
        );
      }
    );
  }

  // 历史记录控件
  Widget _historyListWidget(){
    if(this._historyData.length>0){
      return Column(
        children: <Widget>[
          Text("历史记录",style: Theme.of(context).textTheme.title,),
           Divider(),
          Column(
            children: this._historyData.map((value){
                return Column(
                  children: <Widget>[
                    ListTile(
                      title: Text("$value"),
                      onLongPress: (){
                        this._showAlertDialog("$value");
                      },
                    ),
                    Divider(),
                  ],
                );
            }).toList()
          ),
          SizedBox(height: 100),
          Row(
            children: <Widget>[
              InkWell(
              child: Container(
                // width: ScreenAdaper.width(80),
                height: ScreenAdaper.height(64),
                // decoration: BoxDecoration(
                //   color: Colors.white,
                //   // border: Border.all(color: Colors.black54,width: 1),
                //   borderRadius: BorderRadius.circular(7)
                // ),
                margin: EdgeInsets.only(left: 20),
                child: Row(
                  // mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Icon(Icons.delete),
                    Text("清空历史记录",style: TextStyle(color: Colors.blue),)
                  ],
                ),
              ),
              onTap: (){
                   SearchServices.clearHistoryList();
                   _getHistoryData();
                  // SearchServices.clearHistoryList();
              },
            )
            ],
          )
        ],
      );
      
    }else{
      return Text("");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Container(
          height: ScreenAdaper.height(68),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(30),
            color: Color.fromRGBO(233, 233, 233, 0.8)
          ),
          child: TextField(
            autofocus: true,   // 自动弹出键盘，以输入内容
            decoration: InputDecoration(
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(30),
                borderSide: BorderSide.none
              )
            ),
            onChanged: (value){
              setState(() {
                this._keyWords=value;
              });
            },
          ),
        ),
        actions: <Widget>[
          InkWell(
            child: Container(
              height: ScreenAdaper.height(38),
              width: ScreenAdaper.width(100),
              margin: EdgeInsets.only(top: ScreenAdaper.height(30),right: 10),
              child: Text("搜索",textAlign: TextAlign.center,),
            ),
            onTap: (){
              Navigator.pushNamed(context, "/productList",arguments: {"keyWords":this._keyWords});  // arguments: {"keyWords":_keyWords}
              SearchServices.setHistoryData(this._keyWords);   //记录搜索记录
            },
          )
        ],
      ),
      body: Container(
        child: ListView(
          children: <Widget>[
            Container(
              child: Text("热搜",style: Theme.of(context).textTheme.title,),
            ),
            Divider(),
            Wrap(
              // spacing: 10,
              // runSpacing: 20,
              children: <Widget>[
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Color.fromRGBO(233, 233, 233, 0.9),
                  ),
                  child: Text("春装"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Color.fromRGBO(233, 233, 233, 0.9),
                  ),
                  child: Text("夏装"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Color.fromRGBO(233, 233, 233, 0.9),
                  ),
                  child: Text("秋装"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Color.fromRGBO(233, 233, 233, 0.9),
                  ),
                  child: Text("冬装"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Color.fromRGBO(233, 233, 233, 0.9),
                  ),
                  child: Text("男装"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Color.fromRGBO(233, 233, 233, 0.9),
                  ),
                  child: Text("女装"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Color.fromRGBO(233, 233, 233, 0.9),
                  ),
                  child: Text("18岁宝宝装"),
                ),
              ],
            ),
            SizedBox(height: 20,),
            _historyListWidget(),
          ],
        ),
      ),
    );
  }
}