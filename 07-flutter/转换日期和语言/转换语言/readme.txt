路由传值：
1、路由控件中  
     "/search":(context,{arguments})=>Search(arguments:arguments),     // 传值
2、跳转到某个控件时传递参数  
     Navigator.pushNamed(context, "/search",arguments: {"id":001});
3、到Search控件时接收参数   
    final arguments;
    Search({this.arguments});
    body: Text("${arguments['id']}"),

日期转换
 * 使用flutter内置模块转换日期时不需要引入，直接使用，
     转换日期格式需要在pubspec.yaml中引入date_format: ^1.0.6，然后ctrl+s自动安装,在所用控件中引入这个包，import 'package:date_format/date_format.dart';
     引入这个包，里面自动就有了showDatePicker,showTimePicker这两个控件，这两个控件用来修改日期、时间，然后通过调用一个方法将修改后的新的时间赋给原来的时间，
     showDatePicker(
          context:context,   //上下文，必须有
          initialDate: DateTime.now(),  // 初始时间
          firstDate: DateTime(1980),  
          lastDate: DateTime(2020)
     )
     showTimePicker(
          context: context,
          initialTime: _nowTime,   // 不能在这直接转化，因为在初始化器中只能访问静态成员
     );

     得到当前日期，DateTime r= dateTime.now()  ,转换成所需格式：formatDate(r,[yyyy,'年',mm,'月',dd])
     得到当前时间，var a = TimeOfDay.now()  ,转换成所需格式：a.format(context)

  * 使用flutter第三方模块转换日期，需要在pubspec.yaml中引入：flutter_cupertino_date_picker: ^1.0.12，然后ctrl+s自动安装,在所用控件中引入这个包，import 'package:flutter_cupertino_date_picker/flutter_cupertino_date_picker.dart';
     然后直接复制代码，适当修改
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

改变语言  
     1、在pubspec.yaml中引入所需包
          flutter_localizations:
               sdk: flutter

     2、ctrl+s自动安装，

     3、在main.dart中引入  import 'package:flutter_localizations/flutter_localizations.dart';

     4、在main.dart中进行配置 
      localizationsDelegates: [
      // ... app-specific localization delegate[s] here
      GlobalMaterialLocalizations.delegate,
      GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: [
        const Locale('en', 'US'), // English
        const Locale('he', 'IL'), // Hebrew
        const Locale('zh', 'CH'),  // 添加Chinese
        // ... other locales the app supports
      ],

      5、在所写控件中使用
          var date= await showDatePicker(    // 使用flutter内置模块datePicker
            context: context,    // 上下文必须有
            initialDate: DateTime.now(),  // 初始时间
            firstDate: DateTime(1980),  
            lastDate: DateTime(2020),
            locale: Locale('zh'),    // 指定语言
          );





