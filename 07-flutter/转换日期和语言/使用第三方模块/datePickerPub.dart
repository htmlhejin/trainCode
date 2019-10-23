import 'package:flutter/material.dart';
// 引入转换时间格式的包
import 'package:date_format/date_format.dart';
// 引入第三方模块，页面比内置的好看
import 'package:flutter_cupertino_date_picker/flutter_cupertino_date_picker.dart';

class DatePickPubDemo extends StatefulWidget {
  @override
  _DatePickPubDemoState createState() => _DatePickPubDemoState();
}

class _DatePickPubDemoState extends State<DatePickPubDemo> {
  DateTime _dateTime=DateTime.now();  // 1

  void _showDatePicker(){       //2
      DatePicker.showDatePicker(
      context,
      minDateTime: DateTime.parse("2000-01-01"), 
      maxDateTime: DateTime.parse("2020-12-12"), 
      initialDateTime: _dateTime,
      dateFormat: "yyyy-MMMM-dd",
      locale: DateTimePickerLocale.zh_cn,
      pickerTheme: DateTimePickerTheme(
        showTitle: true,
        confirm:Text('确定',style: TextStyle(color: Colors.green)),
        cancel: Text('取消', style: TextStyle(color: Colors.red)),
      ),
      onClose: () => print("----- onClose -----"),
      onCancel: () => print('onCancel'),
      onConfirm:(dateTime, List<int> index){
        setState((){
          _dateTime=dateTime;
        });
      },
      );
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("日期处理"),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          InkWell(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "${formatDate(_dateTime,[yyyy,'-',mm,'-',dd])}",
                  style: TextStyle(fontSize: 38),
                ),
                Icon(Icons.arrow_drop_down)
              ],
            ),
            onTap: _showDatePicker,
          ),
        ],
      ),
    );
  }
}