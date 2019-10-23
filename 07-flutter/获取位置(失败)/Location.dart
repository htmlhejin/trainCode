import 'package:flutter/material.dart';
import 'package:amap_location/amap_location.dart';

class Location extends StatefulWidget {
  @override
  _LocationState createState() => _LocationState();
}

class _LocationState extends State<Location> {
  double _longitude=0;   // 经度
  double _latitude=0;    // 纬度

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    this._getLocation();
  }

  _getLocation() async {
    await AMapLocationClient.startup(new AMapLocationOption( desiredAccuracy:CLLocationAccuracy.kCLLocationAccuracyHundredMeters  ));
    // 直接获取定位
    var res=await AMapLocationClient.getLocation(true);
    print("...");
    print(res.longitude);
    print("...");
    print(res.latitude);
    print("...");
    // 监听定位
    AMapLocationClient.onLocationUpate.listen((AMapLocation loc){
      if(!mounted)return ;
      setState(() {
        this._longitude=res.longitude; 
        this._latitude=res.latitude;
      });
    });

    AMapLocationClient.startLocation();

  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child:Text("经度：${this._longitude}")
    );
  }
}