import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';   // 轮播图插件
// import '../service/ScreenAdaper.dart';
import '../model/FocusModel.dart';    // 引入轮播图模型类
import 'package:dio/dio.dart';
import 'dart:convert';


class HomePage extends StatefulWidget {
  
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
    List _focusData=[];
    @override
    void initState() { 
      super.initState();
      _getFocusData();
    }
    _getFocusData() async {
      var api='http://jd.itying.com/api/focus';
      var result=await Dio().get(api);
      // print(result.data);
      var focusList = FocusModel.fromJson(result.data);
      print(focusList.result);
      // setState(() {
      //   _focusData=focusList.result;
      // });
    } 
  // 轮播图
  // 返回一个控件，意即定义一个轮播图控件
  Widget _swiper(){
    return Container(
      child: AspectRatio(
        aspectRatio: 2/1,
        child: Swiper(
          itemCount: _focusData.length,
          scrollDirection: Axis.horizontal,
          pagination: new SwiperPagination(),
          autoplay: true,  // 自动播放
          itemBuilder:(context,index){
            return Image.network(_focusData[index]['imgUrl'],fit: BoxFit.fill,);
          },
        ),
      ),
    );
  }

  // 猜你喜欢
  // Widget _guessLike(){
  //   return Container(
  //     margin: EdgeInsets.only(left: ScreenAdaper.width(7)),
  //     decoration: BoxDecoration(
  //       border: Border(
  //         left: BorderSide(
  //           color: Colors.red,
  //           width:ScreenAdaper.width(8)
  //         ),
  //       )
  //     ),
  //     child: Text("猜你喜欢",style: TextStyle(color: Colors.black54),),
  //   );
  // }
  // 猜你喜欢轮播图
  // Widget _likeFocus(){
  //   List<Map> _list=[
  //     {"img":"https://img.51miz.com/Photo/2018/02/02/18/P1269898_44b073e89804f3c8eff8165cbdf902d6.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/260"},
  //     {"img":"https://img.51miz.com/Photo/2017/06/08/20/P974703_5f1ed18bb4c3e03acbd7e74f15364065.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/260"},
  //     {"img":"https://img.51miz.com/Photo/2017/06/29/10/P1243104_118edb9f1ca6373e8685533dc0082ca8.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/260"},
  //     {"img":"https://img.51miz.com/Photo/2017/05/26/12/P883225_8bf8db5ac45497c74bacdce1cec3964b.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/260"},
  //     {"img":"https://img.51miz.com/Photo/2018/02/07/19/P1325087_a724160f8a1b137c5045fb22db4bb352.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/260"},
  //     {"img":"https://img.51miz.com/Photo/2017/05/02/09/P930918_5148e761e2f5171d460a7675ae9c912e.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/260"},
  //     {"img":"https://img.51miz.com/Photo/2017/05/04/08/P703347_acd0734fdeda1faebdb330574de96abe.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/260"},
  //     {"img":"https://img.51miz.com/Photo/2018/02/11/12/P1369475_7070ae2cbae9f49a263f307a9175d60a.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/260"},
  //     {"img":"https://img.51miz.com/Photo/2018/02/15/24/P1423575_ccbbc81e0cbe00b9919d0c1403a40696.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/260"},
  //   ];
  //   return Container(
  //     child: AspectRatio(
  //       aspectRatio: 2/1,
  //       child: Swiper(
  //         scrollDirection: Axis.horizontal,
  //         pagination: new SwiperPagination(),
  //         itemCount: _list.length,
  //         itemBuilder: (context,index){
  //           return Image.network("${_list[index]['img']}",width: ScreenAdaper.width(8),height: ScreenAdaper.height(8));
  //         },
  //       )
  //     ),
  //   );
  // }

  // // 热门推荐
  // Widget _hotrecommend(){
  //   return Container(
  //     margin: EdgeInsets.only(left: ScreenAdaper.width(8)),
  //     decoration: BoxDecoration(
  //       border: Border(
  //         left: BorderSide(
  //           width: ScreenAdaper.width(8),
  //           color:Colors.red
  //         )
  //       )
  //     ),
  //     child: Text("热门推荐",style: TextStyle(color: Colors.black54),),
  //   );
  // }

  

    _getData() async {
      // var res=await Dio().get("http://m.maoyan.com/ajax/movieOnInfoList");
      // var res2=json.decode(res.data);  // 把字符串转为Map类型

      //数据少时 序列化操作  字符串转成Map类型
      // var str='{"name":"wangcai","age":20}';  // 字符串
      // print(json.decode(str));   //转成Map类型
      // var res=json.decode(str);
      // print(res["name"]);   //数据较少时直接通过[]可以得到数据


      // 序列化操作
        // var str='{"_id": "67890fsadf56789fsadf","title": "手机", "status": "1","url": "abc"}';
        // var focus=FocusModel.fromJson(json.decode(str));
        // print(focus.title);
    }

  @override
  Widget build(BuildContext context) {
    // ScreenAdaper.init(context);    /// 初始化
    return Scaffold(
      body:ListView(
        children: <Widget>[
          _swiper(),
          SizedBox(height: 10),
          // _guessLike(),
          // _likeFocus(),
          SizedBox(height: 10),
          // _hotrecommend(),
        ],
      )
    );
  }
}