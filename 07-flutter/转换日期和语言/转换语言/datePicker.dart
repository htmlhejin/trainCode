import 'package:flutter/material.dart';
// 引入转换时间格式的包
import 'package:date_format/date_format.dart';
// 引入第三方模块，页面比内置的好看
import 'package:flutter_cupertino_date_picker/flutter_cupertino_date_picker.dart';


class DatePicker extends StatefulWidget {
  @override
  _DatePickerState createState() => _DatePickerState();
}

class _DatePickerState extends State<DatePicker> {

      // 得到当前日期   年月日
      DateTime _nowDate=DateTime.now();
      // var r= formatDate(_nowDate,[yyyy,'-',mm,'-',dd])  // 错误，在初始化器中只能访问静态成员
      // 定义方法，显示处理时间的页面，点击时调用该方法即可，就像定闹钟
    _showDatePicker() async {
      // 引入date_format自动就有了showDatePicker这个控件，该控件的作用是显示处理日期的页面
      var date= await showDatePicker(    // 使用flutter内置模块datePicker
        context: context,    // 上下文必须有
        initialDate: DateTime.now(),  // 初始时间
        firstDate: DateTime(1980),  
        lastDate: DateTime(2020),
        locale: Locale('zh'),    // 指定语言
      );
      // 得到所选时间，返回时显示所修改的时间
      setState(() {
        _nowDate=date;
      });
    }
  
    // 得到当前时间  时分秒
    var _nowTime=TimeOfDay.now();

    // 点击时调用该方法，显示当前时间，并可以修改
    _showTimePicker () async {
      var r = await showTimePicker(
        context: context,
        initialTime: _nowTime,
      );
      setState(() {
        // 把当前时间(没有修改)或修改的时间赋给_nowTime，得到一个新的时间
        _nowTime=r;
      });
    }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("日期处理")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            // InkWell组件可以把不能点击的组件变成可以点击的
            InkWell(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text('${formatDate(_nowDate,[yyyy,'-',mm,'-',dd])}',style: TextStyle(fontSize: 16,)),  // 转换成所需时间的格式
                  Icon(Icons.arrow_drop_down)
                ],
              ),
              onTap: _showDatePicker,  // 点击时调用_showDatePicker方法修改日期
            ),
            SizedBox(height: 18),
            InkWell(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text('${_nowTime.format(context)}',style: TextStyle(fontSize: 14,)),  // 转换成所需时间的格式
                  Icon(Icons.arrow_drop_down)
                ],
              ),
              onTap: _showTimePicker  // 点击时调用_showTimePickerr方法
            ),
          ],
        ),
      ),
    );
  }
}