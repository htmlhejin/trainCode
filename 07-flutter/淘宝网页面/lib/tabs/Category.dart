import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import '../service/ScreenAdaper.dart';   // 屏幕适配
import 'package:dio/dio.dart';
import 'dart:convert';
import '../config/Config.dart';
import '../model/CateModel.dart';
import './extra/productList.dart';
import './Widget/LoadingWidget.dart';

class CategoryPage extends StatefulWidget {
  @override
  _CategoryPageState createState() => _CategoryPageState();
}

class _CategoryPageState extends State<CategoryPage> with AutomaticKeepAliveClientMixin {
  int _selectIndex=0;
  List _leftCateList=[];
  List _rightCateList=[];

  // 首页和分类切换，不重新请求数据，类似vue中的keep-alive
  // 常连接
  @override
  bool get wantKeepAlive => true;

  @override
  void initState() {
    super.initState();
    _getLeftCateData();
  }
  // 请求左侧分类数据
  _getLeftCateData() async {
    var api="${Config.domain}api/pcate";
    var res=await Dio().get(api);
    var res2=new CateModel.fromJson(res.data);
    setState(() {
      _leftCateList=res2.result;
    });
  }
  // 请求右侧分类数据
  _getRightCate(pid) async {
    var api="${Config.domain}api/pcate?pid=$pid";
    var res=await Dio().get(api);
    var res2=new CateModel.fromJson(res.data);
    setState(() {
      _rightCateList=res2.result;
    });
  }

  // 左侧分类组件
  Widget _leftCateWidget(leftWidth){
      if(_leftCateList.length>0){
        return Container(
          width: leftWidth,
          height: double.infinity,
          child: ListView.builder(
            itemCount: _leftCateList.length,
            itemBuilder: (context,index){
              return Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  InkWell(
                    onTap: (){
                      setState(() {
                        _selectIndex=index;    
                        _getRightCate(_leftCateList[index].sId);     
                      });
                    },
                    child: Container(
                      padding:EdgeInsets.only(top: 15),
                      width: double.infinity,
                      height: ScreenAdaper.height(110),
                      child: Text(
                        this._leftCateList[index].title,
                        textAlign: TextAlign.center,
                        style: TextStyle(color: _selectIndex==index ? Colors.red : Colors.black45)
                        ),
                    ),
                  ),
                  Divider(height:1),
                ],
              );
            },
          ),
        );
      }else{
        return Container(
          width: leftWidth,
          height: double.infinity
        );  
      }
    }

  // 右侧分类组件
  Widget _rightCateWidget(rigthItemWidth,rightItemHeigth){
      if(_rightCateList.length>0){
        return Expanded(
        flex: 1,
        child: Container(
          height: double.infinity,
          padding: EdgeInsets.all(10),
          color: Color.fromRGBO(240, 246, 246, 0.9),
          child: GridView.builder(
          itemCount: _rightCateList.length,
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            childAspectRatio: rigthItemWidth/rightItemHeigth,
            crossAxisSpacing: 10,
            mainAxisSpacing: 10,
          ),
          itemBuilder: (context,index){
            // 处理图片
            String pic=_rightCateList[index].pic;   // 得到图片
            pic=Config.domain+pic.replaceAll("\\", "/");   //修改路径
            return InkWell(
              onTap: (){
                Navigator.pushNamed(context, "/productList",arguments: {"cid":_rightCateList[index].sId});
              },
              child: Column(
                children: <Widget>[
                  AspectRatio(
                    aspectRatio: 1/1,
                    child: Image.network(pic,fit:BoxFit.fill ),
                  ),
                  Container(
                    height: ScreenAdaper.height(40),
                    child: Text(_rightCateList[index].title),
                  )
                ],
              ),
            );
          },
        ),
        )
      );
      }else{
        return LoadingWidget();
        // return Expanded(
        //   flex:1,
        //   child: Container(
        //     padding: EdgeInsets.all(10),
        //     height: double.infinity,
        //     color: Color.fromRGBO(240, 246, 246, 0.9),
        //     child: Text("加载中..."),
        //   ),
        // );
      }
  }

  

  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context);  // 使用ScreenAdaper必须在build中初始化
    // 左侧宽度
    var leftWidth=ScreenAdaper.getScreenWidth()/4;
    // 右侧每一项宽度=屏幕宽度-左侧宽度-左右两侧padding-列与列的间隔
    var rigthItemWidth=(ScreenAdaper.getScreenWidth()-leftWidth-20-20)/3 ;
    // 获取计算后的宽度(适配后?)
    rigthItemWidth=ScreenAdaper.height(rigthItemWidth);
    // 获取计算后的高度
    var rightItemHeigth=rigthItemWidth+ScreenAdaper.height(28);
    return Row(
      children: <Widget>[
        _leftCateWidget(leftWidth),
        _rightCateWidget(rigthItemWidth,rightItemHeigth)
      ],
    );
  }

   
}