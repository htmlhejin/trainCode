import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart'; // flutter中的UI库
// 引入添加语言的包
import 'package:flutter_localizations/flutter_localizations.dart';

import './routes/Routes.dart';

import './views/home.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return MaterialApp(
      // home: Home(),
      initialRoute: "/",   // 设置默认访问路径
      onGenerateRoute:onGenerateRoute,
      localizationsDelegates: [
      // ... app-specific localization delegate[s] here
      GlobalMaterialLocalizations.delegate,   // delegate，代表的意思
      GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: [
        const Locale('en', 'US'), // English
        const Locale('he', 'IL'), // Hebrew
        const Locale('zh', 'CH'),  // 添加Chinese
        // ... other locales the app supports
      ],
    );
  }
}




