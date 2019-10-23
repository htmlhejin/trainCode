import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/material.dart' as prefix0;
import 'package:flutter/rendering.dart';
import '../../service/ScreenAdaper.dart'; // 屏幕适配
import '../Widget/LoadingWidget.dart';
import 'package:dio/dio.dart';
import 'dart:convert';
import '../../config/Config.dart';
import '../../model/ProductModel.dart';

class ProductList extends StatefulWidget {
  Map arguments;
  ProductList({this.arguments});

  @override
  _ProductListState createState() => _ProductListState();
}

class _ProductListState extends State<ProductList>
    with SingleTickerProviderStateMixin {
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();

  // 上拉加载靠的是ListView中的ScrollControll
  ScrollController _scrollController =ScrollController(); // new省略不写  //  ListView的控制器

  List _productList = [];
  // 分页
  int _page = 1;
  // 每页多少条数据
  int _pageSize = 8;
  String _sort = "";
  bool flag = true; // 解决重复请求的问题,默认请求数据
  bool hasMore = true; // 判断是否有数据

  // 判断是否有搜索的数据
  bool _hasData = true;

  // var cid;
  var keyWords;

  // 二级导航数据
  List _subHeaderList = [
    // 价格升序  sort=price_1   价格降序 sort=price_-1   销量升序sort=salecount_1
    {"id": 1, "title": "综合", "fileds": "all", "sort": -1}, // sort表示排序，-1表示降序
    {"id": 2, "title": "销量", "fileds": "salecount", "sort": -1},
    {"id": 3, "title": "价格", "fileds": "price", "sort": -1},
    {"id": 4, "title": "筛选"},
  ];
  // 二级导航默认选中第一个
  int _selectHeaderId = 1;

  var _initKeywordsController = TextEditingController();

  // 改变导航时触发
  _subHeaderChange(id) {
    if (id == 4) {
      // 选中筛选导航，打开筛选面板
      _scaffoldKey.currentState.openEndDrawer();
      setState(() {
        _selectHeaderId = id;
      });
    } else {
      setState(() {
        _selectHeaderId = id;
        _sort =
            "${_subHeaderList[id - 1]['fileds']}_${_subHeaderList[id - 1]['sort']}";
        // 重置分页
        _page = 1;
        // 重置每页多少条数据
        _productList = [];
        // 改变sort排序
        _subHeaderList[id - 1]['sort'] = _subHeaderList[id - 1]['sort'] * -1;
        // 回到顶部
        _scrollController.jumpTo(0);
        hasMore = true;
        _getProductListData();
      });
    }
  }

  // 显示header icon
  Widget _showIcon(id) {
    if (id == 2 || id == 3) {
      if (_subHeaderList[id - 1]["sort"] == 1) {
        // 升序
        return Icon(Icons.arrow_drop_down);
      }
      return Icon(Icons.arrow_drop_up);
    }
    return Text("");
  }

  // 钩子函数
  @override
  void initState() {
    // cid=widget.arguments["cid"];
    // print(this.widget.arguments);
    super.initState();
    _getProductListData();
    // 接收关键字
    keyWords = widget.arguments["keyWords"];
    // 给搜索框赋值
    _initKeywordsController.text = this.keyWords;

    // 监听滚动事件
    _scrollController.addListener(() {
      // 滚动条下拉的距离=屏幕的距离
      if (_scrollController.position.pixels.toInt() >
          _scrollController.position.maxScrollExtent.toInt() - 20) {
        if (flag && hasMore) {
          _getProductListData(); // 拉到底部，重新请求数据
        }
      }
    });
  }

  // 请求商品   数据
  _getProductListData() async {
    setState(() {
      flag = false;
    });
    var api;
    if (keyWords == null) {
      api =
          "${Config.domain}api/plist?cid=${widget.arguments['cid']}&page=$_page&sort=$_sort&pageSize=$_pageSize";
    } else {
      api =
          "${Config.domain}api/plist?search=$keyWords&page=$_page&sort=$_sort&pageSize=$_pageSize";
    }
    // print("${widget.arguments['cid']}");   //  5a050ca5010e711234661466
    var res = await Dio().get(api);
    // print(res.data);
    // {result: [{_id: 59f087ef11945e2760c852dd, title: 笔记本电脑, cid: 59f1e4919bfd8f3bd030eed6, price: 2346, old_price: 4000, pic: public\upload\Hfe1i8QDOkfVt-PuGcxCA0fs.jpg, s_pic: public\upload\Hfe1i8QDOkfVt-PuGcxCA0fs.jpg_200x200.jpg}, {_id: 59f6a2d27ac40b223cfdcf81, title: 乐扣乐扣(lock&lock)菲特旋转盖轻量杯, 
    // cid: 59f1e4919bfd8f3bd030eed6, price: 2001, old_price: 2001, pic: public\upload\iPrQ_-r43nGjFyxYXiMZWTM6.jpg, s_pic: public\upload\iPrQ_-r43nGjFyxYXiMZWTM6.jpg_200x200.jpg}, {_id: 5a042c65010e711234661440, title: 暗影精灵III代 15.6英寸游戏笔记本电脑, cid: 59f1e4919bfd8f3bd030eed6, price: 5999, old_price: 8999, pic: public\upload\wqdy5XSwZJ8Wkp1FNFM6LGk5.png, s_pic: public\upload\wqdy5XSwZJ8Wkp1FNFM6LGk5.png_200x200.png}, {_id: 5a043203010e71123466144b, title: Apple iPhone 6 32GB 金色 移动联
    // 通电信4G手机 , cid: 59f1e4919bfd8f3bd030eed6, price: 2299, old_price: 2999, pic: public\upload\GVu15BYjiMbP8O2Gyq5XRADr.png, s_pic: public\upload\GVu15BYjiMbP8O2Gyq5XRADr.png_2
    var res2 = ProductModel.fromJson(res.data);
    // print(res2);
    // print(res2.result[0]);    // ?

    // 判断搜索是否有结果
    if (res2.result.length == 0 && _page == 1) {
      setState(() {
        _hasData = false;
      });
    } else {
      setState(() {
        _hasData = true;
      });
    }

    // 判断最后一页有没有数据
    if (res2.result.length < _pageSize) {
      // 请求到最后一页数据
      setState(() {
        _productList.addAll(res2.result);
        this.hasMore = false; // 没有数据了
        this.flag = false; //不再请求
      });
    } else {
      setState(() {
        _productList.addAll(res2.result);
        _page++;
        flag = true;
      });
    }
    // print(_productList);
  }

  // 下拉刷新
  Future<void> _onRefresh() async {
    await Future.delayed(Duration(milliseconds: 2000), () {
      _getProductListData();
    });
  }

  // 显示加载动画
  Widget _showMore(index) {
    if (hasMore) {
      // 如果有更多数据，每一页拉到底的时候加载动画
      return (index == _productList.length - 1 ? LoadingWidget() : Text(""));
    } else {
      return (index == _productList.length - 1 ? Text("我是有底线的~") : Text(""));
    }
  }

  // 商品列表
  Widget _productListWidget() {
    if (this._productList.length > 0) {
      return Container(
        padding: EdgeInsets.all(10),
        margin: EdgeInsets.only(top: ScreenAdaper.height(80)),
        child: ListView.builder(
            controller: _scrollController, //加载更多
            itemCount: _productList.length,
            itemBuilder: (context, index) {
              // 得到图片
              String pic=_productList[index].pic;
              // 改变图片路径
              pic=Config.domain+pic.replaceAll("\\", "/");
              return Column(
                children: <Widget>[
                  Padding(
                      padding: EdgeInsets.all(10),
                      child: InkWell(
                        onTap: (){
                          Navigator.pushNamed(context, "/productContent",arguments: {"id":_productList[index].sId});
                          print(_productList[index].sId);   // 59f087ef11945e2760c852dd
                        },
                        child: Row(
                        children: <Widget>[
                          Container(
                            width: ScreenAdaper.width(200),
                            height: ScreenAdaper.height(200),
                            child: Image.network(
                                "$pic"),
                          ),
                          Expanded(
                            flex: 1,
                            child: Container(
                              height: ScreenAdaper.height(220),
                              margin: EdgeInsets.only(left: 10),
                              child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: <Widget>[
                                  Text(
                                    "${_productList[index].title}",
                                    maxLines: 2,
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                  Row(
                                    children: <Widget>[
                                      Container(
                                        height: ScreenAdaper.height(50),
                                        margin: EdgeInsets.only(right: 10),
                                        padding:
                                            EdgeInsets.fromLTRB(10, 0, 10, 0),
                                        decoration: BoxDecoration(
                                            color: Color.fromRGBO(
                                                230, 230, 230, 0.9),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(10))),
                                        child: Text("4g"),
                                      ),
                                      SizedBox(
                                        width: ScreenAdaper.width(10),
                                      ),
                                      Container(
                                        height: ScreenAdaper.height(50),
                                        margin: EdgeInsets.only(right: 10),
                                        padding:
                                            EdgeInsets.fromLTRB(10, 0, 10, 0),
                                        decoration: BoxDecoration(
                                            color: Color.fromRGBO(
                                                230, 230, 230, 0.9),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(10))),
                                        child: Text("126"),
                                      ),
                                    ],
                                  ),
                                  Text("￥5699",
                                      style: TextStyle(
                                          color: Colors.red, fontSize: 16)),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                      ),),
                  Divider(height: 20),
                  _showMore(index),
                ],
              );
            }),
      );
    } else {
      return LoadingWidget();
    }
  }

  // 头部筛选导航
  Widget _subHeaderWidget() {
    return Positioned(
        top: 0,
        height: ScreenAdaper.height(80),
        width: ScreenAdaper.width(750),
        child: Container(
          height: ScreenAdaper.height(80),
          width: ScreenAdaper.width(750),
          decoration: BoxDecoration(
              border: Border(
                  bottom: BorderSide(
                      width: 1, color: Color.fromRGBO(233, 233, 233, 0.9)))),
          child: Row(
              children: this._subHeaderList.map((value) {
            return Expanded(
                flex: 1,
                child: InkWell(
                  child: Padding(
                      padding: EdgeInsets.fromLTRB(0, ScreenAdaper.height(16),
                          0, ScreenAdaper.height(16)),
                      child: Row(
                        children: <Widget>[
                          Text(
                            "${value['title']}",
                            style: TextStyle(
                                color: (_selectHeaderId == value['id'])
                                    ? Colors.red
                                    : Colors.black54,
                                fontSize: 16),
                            textAlign: TextAlign.center,
                          ),
                          _showIcon(value['id'])
                        ],
                      )),
                  onTap: () {
                    _subHeaderChange(value['id']);
                  },
                ));
          }).toList()),
        ));
  }

  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context);
    // return Container(
    //   // child: Text("${this.widget.arguments}"),//
    //   // child: Text("${widget.arguments}"),//
    // );
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        title: Container(
          height: ScreenAdaper.height(68),
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              color: Color.fromRGBO(233, 233, 233, 0.8)),
          child: TextField(
            controller: _initKeywordsController,
            decoration: InputDecoration(
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30),
                    borderSide: BorderSide.none
                    )
                    ),
            autofocus: false,
            onChanged: (value) {
              this.keyWords = value;
            },
          ),
        ),
        actions: <Widget>[
          InkWell(
            child: Container(
              height: ScreenAdaper.height(38),
              width: ScreenAdaper.width(100),
              margin: EdgeInsets.only(top: ScreenAdaper.height(30),right: 10),
              child: Text("搜索"),
            ),
            onTap: (){
              _subHeaderChange(1);
            },
          )
        ],
      ),
      endDrawer: Drawer(child: _showIcon(1)),
      body: _hasData
          ? Stack(
              children: <Widget>[
                _subHeaderWidget(),
                _productListWidget(),
              ],
            )
          : Center(child: Text("没有您要浏览的数据")),
    );
  }
}
