import 'package:flutter/material.dart';

class CartPage extends StatefulWidget {
  @override
  _CartPageState createState() => _CartPageState();
}

class _CartPageState extends State<CartPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Text("购物车",style: TextStyle(color: Colors.black,fontSize: 22),),centerTitle: true,
        actions: <Widget>[
          Container(
            margin: EdgeInsets.only(top: 14,right: 10),
            child: Text("编辑",style: TextStyle(color: Colors.grey,fontSize: 18)),
            ),
          Container(
            margin: EdgeInsets.only(right: 10),
            child: Icon(Icons.mic,color: Colors.black,),
          )
        ],
      ),
    );
  }
}