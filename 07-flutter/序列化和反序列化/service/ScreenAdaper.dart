
// 把适配插件单独封装出来，因为很多页面都需要适配，
import 'package:flutter_screenutil/flutter_screenutil.dart';    // 适配插件


class ScreenAdaper{
  static init(context){    // 初始化屏幕的宽高
    ScreenUtil.instance = ScreenUtil(width: 750, height: 1334)..init(context);
  }

  static height(int value){
    return ScreenUtil.getInstance().setHeight(value);
  }

  static width(int value){
    return ScreenUtil.getInstance().setWidth(value);
  }

  // 获取屏幕的宽度
  static getScreenWidth(){
    return ScreenUtil.screenWidthDp;
  }
}