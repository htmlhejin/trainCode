import 'package:flutter/material.dart';
import '../service/ScreenAdaper.dart';

import './Home.dart';
import './Category.dart';
import './Cart.dart';
import './User.dart';


class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {

  var _currentIndex=0;
  PageController _pageController;

  List<Widget> _listPage=[
    HomePage(),
    CategoryPage(),
    CartPage(),
    UserPage()      // flutter中new省略不写
  ];

  @override
  void initState() {
    _pageController = new PageController(initialPage: _currentIndex);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
      ScreenAdaper.init(context);
      return Scaffold(
        appBar: _currentIndex != 3 ?AppBar(
          leading: IconButton(
            icon: Icon(Icons.center_focus_weak,size: 28,color: Colors.black87),
            onPressed: null,
          ),
          title: InkWell(
            child: Container(
              padding: EdgeInsets.only(left: 10),
              height: ScreenAdaper.height(68),
              decoration: BoxDecoration(
                color: Color.fromRGBO(233, 233, 233, 0.8),
                borderRadius: BorderRadius.circular(30)
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Icon(Icons.search),
                  Text("笔记本",style: TextStyle(fontSize: ScreenAdaper.size(34),color: Colors.black54))
                ],
              ),
            ),
            onTap: (){
              Navigator.pushNamed(context, "/search");
            },
          ),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.message,size: 28,color: Colors.black87),
              onPressed: null,
            )
          ],
        ) : AppBar(title: Text("用户中心"),centerTitle: true,),
        body: PageView(
          controller: _pageController,
          children: _listPage,
          onPageChanged: (index){
            setState(() {
              _currentIndex=index;
            });
          },
          physics: NeverScrollableScrollPhysics(),   // 禁止页面左右滑动
        ),
        bottomNavigationBar: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,   //可以配置多个
          fixedColor: Colors.red,  // 选中时的颜色
          currentIndex: _currentIndex,
          onTap: (index){
            setState(() {
              _currentIndex=index;
              _pageController.jumpToPage(index);
            });
          },
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              title: Text("首页")
            ),
             BottomNavigationBarItem(
            icon: Icon(Icons.category),
            title: Text("分类"),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.shopping_cart),
              title: Text("购物车"),
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.people),
              title: Text("我的"),
            ),
          ]
        ),
        
      );

    // return Scaffold(
    //   appBar: AppBar(title:Text("Elm"),centerTitle: true,),
    //   body:
    //   // 底部导航
    //   bottomNavigationBar:BottomNavigationBar(
    //     currentIndex: _currentIndex,   // 默认第一个被选中
    //     type: BottomNavigationBarType.fixed,  // 可以配置多个导航
    //     fixedColor: Colors.red,
    //     iconSize: 24.0,
    //     onTap: (index){
    //       setState(() {
    //          _currentIndex=index;
    //       });
    //     },
    //     items: [
    //       BottomNavigationBarItem(
    //         icon: Icon(Icons.home),
    //         title: Text("首页"),
    //       ),
          // BottomNavigationBarItem(
          //   icon: Icon(Icons.category),
          //   title: Text("分类"),
          // ),
          // BottomNavigationBarItem(
          //   icon: Icon(Icons.shopping_cart),
          //   title: Text("购物车"),
          // ),
          // BottomNavigationBarItem(
          //   icon: Icon(Icons.people),
          //   title: Text("我的"),
          // ),
    //     ],
    //   ),
    // );
  }
}