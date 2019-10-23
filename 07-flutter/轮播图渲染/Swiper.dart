import 'package:flutter/material.dart';
// 引入轮播图组件
import 'package:flutter_swiper/flutter_swiper.dart';

class SwiperDemo extends StatefulWidget {
  @override
  _SwiperDemoState createState() => _SwiperDemoState();
}

class _SwiperDemoState extends State<SwiperDemo> {
  List<Map> _imgList=[   //Map表示是一个对象
    {
      "url":"https://static.maizuo.com/v5/upload/76528d0a054d6047c548854e9f26b777.jpg?x-oss-process=image/quality,Q_70"
    },
    {
      "url":"https://static.maizuo.com/v5/upload/21fc284251daa056cf445c828bf3f83c.jpg?x-oss-process=image/quality,Q_70"
    }
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text("轮播图组件"),
       ),
      body: Column(
        children: <Widget>[
          Container(
            child: AspectRatio(    // AspectRatio宽高比的意思
              aspectRatio:16/9,
              child: Swiper(
                itemBuilder: (BuildContext context,int index){
                  return  Image.network(
                    _imgList[index]["url"],
                    fit: BoxFit.fill,
                  );
                },
                itemCount: _imgList.length,
                pagination: new SwiperPagination(),
                control: new SwiperControl(),
              ),
            ),
          )
        ],
      ),
    );
  }
}