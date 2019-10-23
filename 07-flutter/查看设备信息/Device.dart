import 'package:flutter/material.dart';
import 'package:device_info/device_info.dart';

class Device extends StatefulWidget {
  @override
  _DeviceState createState() => _DeviceState();
}

class _DeviceState extends State<Device> {
  @override
  void initState() {
    this._getDeviceInfo();
    super.initState();
  }
  _getDeviceInfo() async {
    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();  // new省略不写
    AndroidDeviceInfo androidInfo = await deviceInfo.androidInfo;  // 查看android的信息
    print('Running on ${androidInfo.model}');  // Running on OPPO A59m
    print('设备号 ${androidInfo.androidId}');   // 设备号 97368cb333dcbc9e

    // IosDeviceInfo iosInfo = await deviceInfo.iosInfo;   // 查看ios的信息
    // print('Running on the ${iosInfo.utsname.machine}');
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Flutter Native Device演示"),
      ),
      body: Text("看控制台 信息已经打印到控制台了"),
    );
  }
}