vue也是模仿react
vue中也有单独的状态，合并状态，映射状态和方法等

具体某个组件使用到的数据定义在data中，多数组件使用的数据放在vuex中

实现一个组件的数据显示：
1、封装一个获取数据的方法 
2、实现actons , mutations ,
   在actions中调用获取数据的方法，得到数据，
   然后commit一个mutations，
   mutations中修改数据
3、把actions,mutations映射到需要使用数据的组件中
4、mounted中触发actions
5、mapstate把数据映射过来

