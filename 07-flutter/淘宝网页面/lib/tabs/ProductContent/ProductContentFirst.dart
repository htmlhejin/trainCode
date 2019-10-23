import 'package:flutter/material.dart';
import '../../service/ScreenAdaper.dart';
import '../Widget/JdButton.dart';
import '../../config/Config.dart';
import '../../model/ProductContentModel.dart';
import '../Widget/JdButton.dart';

class ProductContentFirst extends StatefulWidget {
  final List _productContentList;
  ProductContentFirst(this._productContentList);

  @override
  _ProductContentFirstState createState() => _ProductContentFirstState();
}

class _ProductContentFirstState extends State<ProductContentFirst> {
  ProductContentitem _productContent;
  List _attr=[];

  @override
  void initState() {
    _productContent=widget._productContentList[0];
    // print(widget._productContentList);
    // print(_productContent);
    _attr=_productContent.attr;
    // print(_attr);   // [{"cate":"鞋面材料","list":["牛皮 "]},{"cate":"闭合方式","list":["系带"]},{"cate":"颜色","list":["红色","白色","黄色"]}]
    super.initState();
  }

  List<Widget> _getAttrItemWidget(attrItem){
    List<Widget> attrItemList=[];
    attrItem.list.forEach((item){
      attrItemList.add(Container(
        padding: EdgeInsets.all(10),
        child: Chip(
          label: Text("$item"),
          padding: EdgeInsets.all(10),
          backgroundColor: Colors.red[200],
        ),
      ));
    });
    return attrItemList;
  }

  // 封装一个组件
  List<Widget> _getAttrWidget(){
    List<Widget> attrList=[];
      this._attr.forEach((attrItem){
        attrList.add(Wrap(
          children: <Widget>[
            Container(
              width: ScreenAdaper.width(120),
              child: Padding(
                padding: EdgeInsets.only(top: ScreenAdaper.height(38),left: ScreenAdaper.width(8)),
                child: Text("${attrItem.cate}:",style: TextStyle(fontWeight: FontWeight.bold,fontSize: 18),)
              )
            ),
            Container(
              width: ScreenAdaper.width(590),
              child: Wrap(
                children: _getAttrItemWidget(attrItem),
              ),
            )
          ],
        ));
      });
      return attrList;
  }

    // 底部弹出框
    _attrBottomSheet(){
      showModalBottomSheet(
        context: context,
        builder: (context){
          return GestureDetector(
            onTap: (){
              return false;   // 点击时不消失
            },
            child: Stack(
              children: <Widget>[
                Container(
                  child: ListView(
                    children: <Widget>[
                      Column(
                        children: _getAttrWidget(),
                      )
                    ],
                  ),
                ),
                Positioned(
                  width: ScreenAdaper.width(750),
                  height: ScreenAdaper.height(76),
                  bottom: 0,
                  child: Row(
                    children: <Widget>[
                      // 立即购买
                      Expanded(
                        flex: 1,
                        child:Container(
                          child: Container(
                            color:  Colors.red,
                            child: JdButton(
                              // color: Colors.orange[200],
                              text: "立即购买",
                              cb: (){
                                print("立即购买");
                              },
                            ),
                          )
                        )
                      ),
                      // 加入购物车
                      Expanded(
                        flex: 1,
                        child:Container(
                          color:  Colors.orange[200],
                          child: JdButton(
                            // color:  Colors.orange[200],
                            text: "加入购物车",
                            cb: (){
                              print("加入购物车");
                            },
                          ),
                        )
                      )
                    ],
                  ),
                )
              ],
            ),
          );
        }
      );
    }

  @override
  Widget build(BuildContext context) {
    // 处理图片
    String pic=Config.domain+_productContent.pic;
    pic=pic.replaceAll("\\", "/");
    return Container(
      padding: EdgeInsets.all(10),
      child: ListView(
        children: <Widget>[
          // 商品图片
          AspectRatio(
            aspectRatio: 16/12,
            child: Image.network("$pic",fit: BoxFit.cover),
          ),
          // 标题
          Container(
            padding: EdgeInsets.only(top: 10),
            child: Text("${_productContent.title}",style: TextStyle( color: Colors.black87, fontSize: ScreenAdaper.size(42)),)
          ),
          // 二级标题
          Container(
            padding: EdgeInsets.only(top: 10),
            child: Text("${_productContent.subTitle}",style: TextStyle(color: Colors.black54,fontSize: ScreenAdaper.size(38)),),
          ),
          // 价格
          Container(
            padding: EdgeInsets.only(top: 8),
            child: Row(children: <Widget>[
              Expanded(
                flex: 1,
                child: Row(
                  children: <Widget>[
                    Text("特价:"),
                    Text("${_productContent.price}",style: TextStyle(color: Colors.red,fontSize: ScreenAdaper.size(44)))
                  ],
                ),
              ),
              Expanded(
                flex: 1,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: <Widget>[
                    Text("原价:"),
                    Text("${_productContent.oldPrice}",style: TextStyle(color: Colors.black38,fontSize: ScreenAdaper.size(38)))
                  ],
                ),
              ),
            ],
          )
          ),
          Divider(),
          // 筛选
          Container(
            margin: EdgeInsets.only(top: 6),
            child: InkWell(
              onTap: (){
                _attrBottomSheet();
              },
              child: Row(
                children: <Widget>[
                  Text("已选:", style: TextStyle(fontWeight: FontWeight.bold)),
                  Text("115,黑色,XL,1件")
                ],
              ),
            ),
          ),
          Divider(),
          // 运费
          Container(
            child: Row(
              children: <Widget>[
                Text("运费:",style: TextStyle(fontWeight: FontWeight.bold,)),
                Text("免运费")
              ],
            ),
          ),
          Divider(),
        ],
      ),
    );
  }
}