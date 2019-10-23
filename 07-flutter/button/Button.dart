import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';

class Button extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("按钮组件"),
      ),
      body: Column(
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              RaisedButton(
                child: Text("启动按钮"),
                onPressed: () {},
              ),
              SizedBox(width: 10),
              RaisedButton(
                child: Text("阴影按钮"),
                color: Colors.red, //按钮颜色
                textColor: Colors.white, //文本颜色
                elevation: 19,   // 设置阴影
                onPressed: (){},
              ),
              SizedBox(width: 10),
              RaisedButton(
                child: Text("颜色按钮"),
                color: Colors.blue, //按钮颜色
                textColor: Colors.white, //文本颜色
                onPressed: (){},
              ),
            ],
          ),
          SizedBox(height:18),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              RaisedButton.icon(
                icon: Icon(Icons.search),
                label:Text("图标按钮")  ,   //  图标按钮中的文字用label属性  
                color: Colors.green,
                onPressed: (){},          
              ),
              Container(
                width: 200,
                height: 40,
                child: RaisedButton(
                  child: Text("自定义按钮"),
                  color: Color.fromRGBO(122, 122, 122, 99),
                  onPressed: (){},
                ),
              )
            ],
          ),
          SizedBox(height:20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                child: Text("圆角按钮"),
                color: Colors.purpleAccent,
                textColor: Colors.white,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
                onPressed: (){},
              )
            ],
          ),
          Row(
            children: <Widget>[
              Container(
                height: 80,
               child: 
                 RaisedButton(
                  child: Text("圆形按钮"),
                  color: Colors.blue,
                  shape: CircleBorder(
                    side: BorderSide(color: Colors.purple,width: 5)
                  ),
                  onPressed: (){},
              ),
              )
            ],
          )
        ],
      ),
    );
  }
}
