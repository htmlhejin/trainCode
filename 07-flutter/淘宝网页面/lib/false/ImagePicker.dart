// import 'dart:io';   // dart.io  A reference to a file on the file system.对文件系统文件上的引用

// import 'package:dio/dio.dart';
// import 'package:flutter/material.dart';
// // 引入上传图片的第三方包
// import 'package:image_picker/image_picker.dart';
// // import 'package:url_launcher/url_launcher.dart';

// class ImagePicker extends StatefulWidget {
//   @override
//   State<StatefulWidget> createState() =>  _ImagePickerState();

//   // static pickImage({ImageSource source, int maxWidth}) {}
//   }
  
//   class _ImagePickerState extends State<ImagePicker> {
//     File _image;
//     @override
//     Widget build(BuildContext context) {
//       return Scaffold(
//         appBar: AppBar(
//             title: Text("ImagePicker"),
//           ),
//         body: SingleChildScrollView(
//           child:Column(
//             children: <Widget>[
//               RaisedButton(
//                 child: Text("拍照"),
//                 // onPressed: ()async{
//                 //   const url="carema://";
//                 //   if(await canLaunch(url)){
//                 //     await launch(url);
//                 //   }
//                 // },
//                 onPressed:(){},
//               ),
//               RaisedButton(
//                 child: Text("从图库中选择"),
//                 onPressed: _openGallery,
//               ),
//               _buildImage(),
//             ],
//           ),
//         )
//       );
//     }
//     // 拍照
//     // _takePhoto() async {
//     //   var image = await ImagePicker.pickImage(source: ImageSource.camera,maxWidth:400);
//     // setState(() {
//     //  _image=image;   // 得到所拍照片
//     // });
//     // 上传图片显示出来
//   //   this._uploadImage(image);
//   // }

//   // 拍完照片上传图片
//     _uploadImage(_imageDir) async {
//       FormData formData=new FormData.from({
//         "name": "zhangsna 6666666666",
//         "age": 20,
//         "sex":"男",
//         "file":new UploadFileInfo(_imageDir, "123.jpg")  // 固定写法，第一个参数file,第二个参数fileName
//       });
//       var res= Dio().post("http://jd.itying.com/imgupload",data: formData);
//       print(res);
//     }

//     // 打开图库，选择照片
//     _openGallery() async {
//       var image = await ImagePicker.pickImage(source: ImageSource.gallery,maxWidth:400);
//         setState(() {
//         _image=image;   // 得到所拍照片
//         });
//     }

//     // 定义一个控件选择图片
//     Widget _buildImage(){
//       if(this._image==null){
//         return Text("请选择图片");
//       }else{
//         return Image.file(this._image);
//       }
//     }

// }

