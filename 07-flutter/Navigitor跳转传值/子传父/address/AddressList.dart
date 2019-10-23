import 'package:flutter/material.dart';

// import 'package:myflutter/address/GetAddress.dart';

class AddressList extends StatefulWidget {
  @override
  _AddressListState createState() => _AddressListState();
}

class _AddressListState extends State<AddressList> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("地址列表"),),
      body: ListView(
        children: <Widget>[
          GestureDetector(
            onTap: (){   //  pop表示返回之前的页面，带参数
              Navigator.of(context).pop("旺财 北京市昌平区沙河镇北京科技经营管理学院");
            },
            child: Container(
              decoration: BoxDecoration(
                border: Border.all(
                  color: Colors.red,
                  width: 3
                )
              ),
              child: ListTile(
                leading: Icon(
                  Icons.account_box,
                  color: Colors.blue,
                ),
                title: Text(
                  "旺财 北京市昌平区沙河镇北京科技经营管理学院",
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  ),
              ),
            ),
          ),
          SizedBox(height:10),   //  SizedBox用来设置间隙
           GestureDetector(
             onTap: (){
               Navigator.of(context).pop("小强 北京市昌平区沙河镇北京科技经营管理学院");
             },
            child: Container(
              child: ListTile(
                leading: Icon(
                  Icons.account_box,
                  color: Colors.blue,
                ),
                title: Text(
                  "小强 北京市昌平区沙河镇北京科技经营管理学院",
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  ),
              ),
            ),
          ),
          SizedBox(height:10),
           GestureDetector(
             onTap: (){
               Navigator.of(context).pop("张三 北京市昌平区沙河镇北京科技经营管理学院");
             },
            child: Container(
              child: ListTile(
                leading: Icon(
                  Icons.account_box,
                  color: Colors.blue,
                ),
                title: Text(
                  "张三 北京市昌平区沙河镇北京科技经营管理学院",
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  ),
              ),
            ),
          )
        ],
      )
    );
  }
}