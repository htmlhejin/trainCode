import 'package:flutter/material.dart';
// 这个包检查网络情况，是wifi联网还是流量还是无网络
import 'package:connectivity/connectivity.dart';

class NetWork extends StatefulWidget {
  @override
  _NetWorkState createState() => _NetWorkState();
}

class _NetWorkState extends State<NetWork> {
  var subscription;
  String _stateText;

  // 钩子函数，跳转到该页面时就检查网络状况
  

  // 直接监听网络状况
  @override
  void initState() {
    super.initState();
    subscription=Connectivity().onConnectivityChanged.listen((ConnectivityResult result){
      if(result == ConnectivityResult.mobile){
        setState((){
        _stateText="处于手机网络";
        });
      }else if(result == ConnectivityResult.wifi){
        setState((){
        _stateText="处于wifi";
        });
      }else{
        setState((){
        _stateText="没网了";
        });
      }
    });
  }

  // 钩子函数结束之后销毁
  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    subscription.cancel();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child:Text("${this._stateText}")
    );
  }
}