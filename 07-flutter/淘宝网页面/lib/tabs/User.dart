import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import '../service/ScreenAdaper.dart';

class UserPage extends StatefulWidget {
  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Column(
      children: <Widget>[
        Container(
          height: ScreenAdaper.height(260),
          margin: EdgeInsets.all(10),
          decoration: BoxDecoration(
              color: Colors.red[300], borderRadius: BorderRadius.circular(10)),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              Container(
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(23)
                    ),
                child: Image.network(
                  "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2373031648,2073288087&fm=26&gp=0.jpg",
                  width: ScreenAdaper.width(130),
                  height: ScreenAdaper.height(130),
                  fit: BoxFit.fill,
                ),
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Row(
                    children: <Widget>[
                      Text(
                        "用户名:",
                        style: TextStyle(fontSize: 14, color: Colors.white),
                      ),
                      Text(
                        "wangcai",
                        style: TextStyle(fontSize: 14, color: Colors.white),
                      )
                    ],
                  ),
                  SizedBox(height: 10),
                  Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        color: Colors.red[700],
                      ),
                      child: InkWell(
                        onTap: () {
                          Navigator.pushNamed(context, "/login");
                        },
                        child: Text("登录京东账号>",
                            style:
                                TextStyle(fontSize: 14, color: Colors.white)),
                      ))
                ],
              ),
              Container(
                child: Row(
                  children: <Widget>[
                    Icon(Icons.settings),
                    Text("账号管理",
                        style: TextStyle(color: Colors.black54, fontSize: 14))
                  ],
                ),
              )
            ],
          ),
        ),
        Container(
          margin: EdgeInsets.only(left:10,right: 10) ,
          height: ScreenAdaper.height(40),
          decoration: BoxDecoration(
            color: Colors.grey[350],
          ),
        ),
        Container(
          margin: EdgeInsets.all(10) ,
          child: Column(
            children: <Widget>[
              // 点击时查看全部订单
              Container(
                height: ScreenAdaper.height(65),
                child: InkWell(
                  onTap: (){

                  },
                  child: Row(
                    children: <Widget>[
                      Icon(Icons.devices_other),
                      SizedBox(width: ScreenAdaper.width(16),),
                      Text("全部订单"),
                    ],
                  ),
                ),
              ),
              Divider(),
              Container(
                height: ScreenAdaper.height(65),
                child: InkWell(
                  onTap: (){

                  },
                  child: Row(
                    children: <Widget>[
                      Icon(Icons.menu),
                      SizedBox(width: ScreenAdaper.width(16),),
                      Text("待付款"),
                    ],
                  ),
                ),
              ),
              Divider(),
              Container(
                height: ScreenAdaper.height(65),
                child: InkWell(
                  onTap: (){

                  },
                  child: Row(
                    children: <Widget>[
                      Icon(Icons.show_chart),
                      SizedBox(width: ScreenAdaper.width(16),),
                      Text("待收货"),
                    ],
                  ),
                ),
              ),
              Divider(),
              Container(
                height: ScreenAdaper.height(65),
                child: InkWell(
                  onTap: (){

                  },
                  child: Row(
                    children: <Widget>[
                      Icon(Icons.shopping_basket),
                      SizedBox(width: ScreenAdaper.width(16),),
                      Text("售后订单"),
                    ],
                  ),
                ),
              ),
              Container(
                height: ScreenAdaper.height(40),
                decoration: BoxDecoration(
                  color: Colors.grey[350],
                ),
              ),
              Container(
                height: ScreenAdaper.height(65),
                child: InkWell(
                  onTap: (){

                  },
                  child: Row(
                    children: <Widget>[
                      Icon(Icons.dialer_sip),
                      SizedBox(width: ScreenAdaper.width(16),),
                      Text("优惠券"),
                    ],
                  ),
                ),
              ),
              Divider(),
              Container(
                height: ScreenAdaper.height(65),
                child: InkWell(
                  onTap: (){

                  },
                  child: Row(
                    children: <Widget>[
                      Icon(Icons.fast_forward),
                      SizedBox(width: ScreenAdaper.width(16),),
                      Text("亲豆"),
                    ],
                  ),
                ),
              ),
              Divider(),
              Container(
                height: ScreenAdaper.height(65),
                child: InkWell(
                  onTap: (){

                  },
                  child: Row(
                    children: <Widget>[
                      Icon(Icons.merge_type),
                      SizedBox(width: ScreenAdaper.width(16),),
                      Text("京东卡/E卡"),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    ));
  }
}
