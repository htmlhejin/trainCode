import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';   // 播放视频
import 'package:chewie/chewie.dart';    // 进度条，音量，倍速等的显示

class Vedio extends StatefulWidget {
  @override
  _VedioState createState() => _VedioState();
}

class _VedioState extends State<Vedio> {
  VideoPlayerController _controller;
  ChewieController _chewieController;
  // var _playerWidget;
 
  @override
  void initState() {
    // print("object");
    super.initState();

    // 简单一个视频
    _controller=VideoPlayerController.network(
      "http://vd1.bdstatic.com/mda-hgae05ww89wd58w0/sc/mda-hgae05ww89wd58w0.mp4")
    ..initialize().then((_){
      setState(() {});
    });

    // 进度条
    _chewieController= ChewieController(
    videoPlayerController:_controller,
    aspectRatio:3/2,
    autoPlay: true,
    looping: true,
    );

     final playerWidget = Chewie(
      controller: _chewieController,
      );

  }


  // 生命周期结束时  点击关闭时销毁视频
  @override
  void dispose() {
    _controller.dispose();
    _chewieController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("VideoPlayer"),),
      body: Center(
        child: _controller.value.initialized ?
         AspectRatio(
          aspectRatio: _controller.value.aspectRatio,
          child: VideoPlayer(_controller),
        )
        :Container(),
        
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          setState(() {
            _controller.value.isPlaying ? _controller.pause() : _controller.play();
          });
        },
        child: Icon(_controller.value.isPlaying ? Icons.pause : Icons.play_arrow,),
      ),
    );   
  }
}