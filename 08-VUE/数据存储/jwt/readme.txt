把一个数组以一定的标签渲染出来，h1标签 ，p标签，a标签等，有两种方法：

1、jsx中render函数，较繁琐    iVew中大量使用render函数  
2、作用域插槽   给作用域插槽设置几个属性，父组件中可以通过上下文ctx.xxx得到插槽中的属性，把数据渲染出来
   ElementUI中大量使用插槽