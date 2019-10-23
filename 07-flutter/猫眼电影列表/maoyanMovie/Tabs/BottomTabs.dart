import 'package:flutter/material.dart';

class BottomTabs extends StatefulWidget {
  
  @override
  _BottomTabsState createState() => _BottomTabsState();
}

class _BottomTabsState extends State<BottomTabs> {
  int _currentIndex=0;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: BottomNavigationBar(
        currentIndex: this._currentIndex,
        onTap: (int index){
          setState(() {
          this._currentIndex=index;
          });
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.money_off),
            title: Text("电影")
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.motorcycle),
            title: Text("影院")
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.verified_user),
            title: Text("我的")
          ),
        ]
      ),
    );
  }
}