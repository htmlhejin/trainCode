import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_swiper/flutter_swiper.dart'; // 轮播图插件
import '../service/ScreenAdaper.dart';
import '../model/ProductModel.dart'; // 引入轮播图模型类
import '../model/FocusModel.dart';
import 'package:dio/dio.dart';
import 'dart:convert';
import '../config/Config.dart';
import './Widget/LoadingWidget.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with AutomaticKeepAliveClientMixin  {
  List _focusData = [];
  List _hotProductList = [];
  List _bestProductList = [];

   // 首页和分类切换，不重新请求数据，类似vue中的keep-alive
  // 常连接
  @override
  bool get wantKeepAlive => true;

  @override
  void initState() {
    super.initState();
    _getFocusData();
    _getHotProductData();
    _getBestProducyData();
  }

  // 获取轮播图数据
  _getFocusData() async {
    var api = "${Config.domain}api/focus";
    // var api='http://jd.itying.com/api/focus';
    var result = await Dio().get(api);
    // print(result.data);
    var focusList = FocusModel.fromJson(result.data);
    // print(focusList.result);
    setState(() {
      this._focusData = focusList.result;
    });
  }

  // 获取猜你喜欢数据
  _getHotProductData() async {
    var api = "${Config.domain}api/plist?is_hot=1";
    var res = await Dio().get(api);
    // print(res.data);
    var res2 = ProductModel.fromJson(res.data); // FocusModel.fromJson把数据转成另一种类似js中形式的对,可以通过.xxx得到属性
    // print(res2);
    setState(() {
      _hotProductList = res2.result;
    });
  }

  // 获取热门推荐数据
  _getBestProducyData() async {
    var api = "${Config.domain}api/plist?is_best=1";
    var res = await Dio().get(api);
    var res2 = ProductModel.fromJson(res.data);
    setState(() {
      _bestProductList = res2.result;
    });
  }

  // 轮播图控件
  Widget _swiper() {
    if (this._focusData.length > 0) {
      return Container(
        child: AspectRatio(
          aspectRatio: 2 / 1,
          child: Swiper(
            itemCount: _focusData.length,
            scrollDirection: Axis.horizontal,
            pagination: new SwiperPagination(),
            autoplay: true, // 自动播放
            itemBuilder: (BuildContext context, int index) {
              String pic = this._focusData[index].pic;
              return new Image.network(
                "http://jd.itying.com/${pic.replaceAll('\\', '/')}",
                fit: BoxFit.fill,
              );
            },
          ),
        ),
      );
    } else {
      return LoadingWidget();
    }
  }

  // 猜你喜欢
  Widget _titleWidget(value) {
    return Container(
      // height: 30,
      margin: EdgeInsets.only(left: ScreenAdaper.width(10)),
      padding: EdgeInsets.only(left: ScreenAdaper.width(10)),
      decoration: BoxDecoration(
          border: Border(
              left:
                  BorderSide(width: ScreenAdaper.width(8), color: Colors.red))),
      child: Text(
        value,
        style: TextStyle(color: Colors.black54),
      ),
    );
  }

  // 热门推荐
  Widget _hotrecWidget(value) {
    return Container(
      // width: 30,
      margin: EdgeInsets.only(
        left: ScreenAdaper.width(10),
      ),
      padding: EdgeInsets.only(
        left: ScreenAdaper.width(10),
      ),
      decoration: BoxDecoration(
          border: Border(
              left:
                  BorderSide(width: ScreenAdaper.width(8), color: Colors.red))),
      child: Text(
        value,
        style: TextStyle(color: Colors.black54),
      ),
    );
  }

  // 猜你喜欢商品
  Widget _hotProductListWidget() {
    if (_hotProductList.length > 0) {
      return Container(
        height: ScreenAdaper.height(234),
        padding: EdgeInsets.all(ScreenAdaper.width(20)),
        child: ListView.builder(
          scrollDirection: Axis.horizontal,
          itemCount: _hotProductList.length,
          itemBuilder: (context, index) {
            String sPic = _hotProductList[index].sPic;
            sPic = Config.domain + sPic.replaceAll('\\', '/');
            return InkWell(
              onTap: (){
                Navigator.pushNamed(context, "/productContent",arguments: {"id":_hotProductList[index].sId});
              },
              child: Column(
              children: <Widget>[
                Container(
                  width: ScreenAdaper.width(140),
                  height: ScreenAdaper.height(140),
                  margin: EdgeInsets.only(right: ScreenAdaper.width(21)),
                  child: Image.network(
                    sPic,
                    fit: BoxFit.cover,
                  ),
                ),
                Container(
                  padding: EdgeInsets.only(top: ScreenAdaper.height(8)),
                  height: ScreenAdaper.height(50),
                  child: Text(
                    "￥${_hotProductList[index].price}",
                    textAlign: TextAlign.center,
                  ),
                )
              ],
            )
            );
          },
        ),
      );
    } else {
      return Text("");
    }
  }

  // 热门推荐商品
  Widget _recProductItemWidget() {
    var itemWidth = (ScreenAdaper.getScreenWidth() - 30) / 2;
    return Container(
      padding: EdgeInsets.all(10),
      child: Wrap(
        spacing: 10,
          children: this._bestProductList.map((value){
        // 图片
        String sPic = value.sPic;
        sPic = Config.domain + sPic.replaceAll('\\', '/');
        return InkWell(
          onTap: (){
            Navigator.pushNamed(context, "/productContent",arguments: {"id":value.sId});
          },
          child: Container(
          margin: EdgeInsets.only(bottom: ScreenAdaper.height(20)),
          padding: EdgeInsets.all(10),
          width: itemWidth,
          decoration: BoxDecoration(
              border: Border.all(
                  color: Color.fromRGBO(233, 233, 233, 0.9), width: 1)),
          child: Column(
            children: <Widget>[
              Container(
                  width: double.infinity,
                  child: AspectRatio(
                    // 防止服务器返回的图片大小不一致导致高度不一致问题
                    aspectRatio: 1 / 1,
                    child: Image.network(
                      sPic,
                      fit: BoxFit.fill,
                    ),
                  )),
              Padding(
                padding: EdgeInsets.only(top: ScreenAdaper.height(20)),
                child: Text(
                  value.title,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(color: Colors.black54),
                ),
              ),
              Padding(
                  padding: EdgeInsets.only(top: ScreenAdaper.height(10)),
                  child: Stack(
                    children: <Widget>[
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          "￥${value.price}",
                          style: TextStyle(color: Colors.red),
                        ),
                      ),
                      Align(
                        alignment: Alignment.centerRight,
                        child: Text("￥${value.price}",
                            style: TextStyle(
                              color: Colors.black38,
                              decoration: TextDecoration.lineThrough,
                            )),
                      )
                    ],
                  ))
            ],
          ),
        ),
        );
      }).toList()),
    );
  }

  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context); // 使用ScreenAdaper必须在build方法里面初始化
    return ListView(
      children: <Widget>[
        _swiper(),
        SizedBox(height: ScreenAdaper.height(10)),
        _titleWidget("猜你喜欢"),
        SizedBox(height: ScreenAdaper.height(10)),
        _hotProductListWidget(),
        SizedBox(height: ScreenAdaper.height(10)),
        _hotrecWidget("热门推荐"),
        SizedBox(height: ScreenAdaper.height(10)),
        _recProductItemWidget(),
      ],
    );
  }

}
