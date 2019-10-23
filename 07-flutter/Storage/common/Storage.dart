// 封装操作状态的方法
import 'package:flutter/widgets.dart';
import 'package:shared_preferences/shared_preferences.dart';
// shared_preferences存储的数据是键值对，String类型

class Storage{   // 封装一个类，类里面有很多方法
  // static表示静态方法，只能通过通过类名调用  Storage.setString()
  // 设置数据，不需要返回数据,void  调用该方法时需要传递过来所设置的数据
  static Future<void> setString(key,value) async {
    // 获取实例
    SharedPreferences prefs = await  SharedPreferences.getInstance();
    prefs.setString(key, value);
    print(key);
  }

  // 获取数据，返回值是String类型
  static Future<String> getString(key) async {
    SharedPreferences prefs = await  SharedPreferences.getInstance();
    return  prefs.getString(key);  // 
  }

  // 删除数据
  static Future<void> remove(key) async {
    SharedPreferences prefs = await  SharedPreferences.getInstance();
    prefs.remove(key);  // 
  }
}

