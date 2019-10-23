import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../service/ScreenAdaper.dart';
import '../Widget/JdButton.dart';
import '../ProductContent/ProductContentFirst.dart';
import '../ProductContent/ProductContentSecond.dart';
import '../ProductContent/ProductContentThird.dart';
import '../../config/Config.dart';
import 'package:dio/dio.dart';
import '../../model/ProductContentModel.dart';
import '../Widget/LoadingWidget.dart';

class ProductContent extends StatefulWidget {
  final Map arguments;
  // String id;
  ProductContent({this.arguments});
  @override
  _ProductContentState createState() => _ProductContentState();
}

class _ProductContentState extends State<ProductContent> {
  List _productContentList=[];

  @override
  void initState() {
    _getContentData();
    super.initState();
  }

  _getContentData() async {
    var api="${Config.domain}api/pcontent?id=${widget.arguments['id']}";
    // print(widget.arguments);   // {id: 59f6a2d27ac40b223cfdcf81}
    var res=await Dio().get(api);
    // print(res);
//     不锈钢保温杯学生杯商务杯情侣杯保冷杯子便携水杯LHC4131WB(450Ml)白蓝<br /></p><p><br /></p><p><img src=\"https://img20.360buyimg.com/vc/jfs/t3178/212/1425374630/276758/f8ed5136/57cce879N17ec3f97.jpg\" style=\"margin: 0px; padding: 0px; border: 0px; vertical-align: middle; color: rgb(102, 102, 102); font-size: 14px; text-align: center;\" alt=\"\" /></p>","cname":"小米","attr":[{"cate":"颜色","list":["红色","白色","黄色"]}],"sub_title":"乐扣乐扣(lock&lock)菲特旋转盖轻量杯不锈钢保温杯学生杯商务 
// 杯情侣杯保冷杯子便携水杯LHC4131WB(450Ml)白蓝","salecount":800}}
  var res2=ProductContentModel.fromJson(res.data);
  // print(res2);
  setState(() {
      _productContentList.add(res2.result);
    });
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          title: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                child: TabBar(
                  indicatorColor: Colors.red,
                  indicatorSize: TabBarIndicatorSize.label,
                  tabs: <Widget>[
                    Tab(
                      child: Text("商品"),
                    ),
                    Tab(
                      child: Text("详情"),
                    ),
                    Tab(
                      child: Text("评价"),
                    ),
                  ],
                ),
              )
            ],
          ),
          // 右侧按钮
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.more_horiz),
              onPressed: (){
                showMenu(
                  context: context,
                  position: RelativeRect.fromLTRB(ScreenAdaper.width(600), 76, 10, 0),
                  items: [
                    PopupMenuItem(
                      child: Row(
                        children: <Widget>[
                          Icon(Icons.home),
                          Text("首页")
                        ],
                      ),
                    ),
                    PopupMenuItem(
                      child: Row(
                        children: <Widget>[
                          Icon(Icons.search),
                          Text("搜索")
                        ],
                      ),
                    )
                  ]
                );
              },
            )
          ],
        ),
        body: _productContentList.length>0 ? Stack(
          children: <Widget>[
            TabBarView(
              children: <Widget>[
                ProductContentFirst(_productContentList),
                ProductContentSecond(_productContentList),
                ProductContentThird()
              ],
            ),
            Positioned(
              width: ScreenAdaper.width(750),
              height: ScreenAdaper.height(120),
              bottom: 0,
              child: Container(
                decoration: BoxDecoration(
                  border: Border(
                    top: BorderSide(
                      width: 1,
                      color: Colors.black26
                    )
                  ),
                  color: Colors.orange[300]
                ),
                child: Row(
                  children: <Widget>[
                    Container(
                      decoration: BoxDecoration(
                      color: Colors.white,
                        border: Border(
                          right: BorderSide(
                            width: 1,
                            color: Colors.black26
                          )
                        )
                      ),
                      padding: EdgeInsets.only(top: 5),
                      width: 100,
                      height: ScreenAdaper.height(120),
                      child: Column(
                        children: <Widget>[
                          Icon(Icons.shopping_cart),
                          Text("购物车")
                        ],
                      ),
                    ),
                    Expanded(
                      flex:1,
                      child: JdButton(
                        color:Colors.orange[400],
                        text: "加入购物车",
                        cb: (){
                          print("加入购物车");
                        },
                      ),
                    ),
                    Divider(),
                    Expanded(
                      flex:1,
                      child: JdButton(
                        color: Colors.red,
                        text: "立即购买",
                        cb: (){
                          print("立即购买");
                        },
                      ),
                    )
                  ],
                ),
              ),
            )
          ],
        ) : LoadingWidget(),
      ),
    );
  }
}