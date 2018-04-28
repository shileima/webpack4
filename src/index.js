function hello(str) {
    alert(str);
}
hello('hello world!');


/* {总结
我们可以将以上探索进行整理总结，首先是注意事项：

1、webpack-cli必须要全局安装，否则不能使用webpack指令； 
2、webpack也必须要全局安装，否则也不能使用webpack指令。 
3、webpack4.x中webpack.config.js这样的配置文件不是必须的。 
4、默认入口文件是./src/index.js，默认输出文件./dist/main.js。

配置步骤：

1、创建工程目录； 
2、初始化工程目录：npm init。 
3、全局安装webpack-cli。 
4、全局安装webpack。 
5、webpack –mode development/production进行打包，可在package.json中配置dev和build的脚本，便只需运行npm run dev/build，作用相同。 
6、在webpack –mode development/production可串联设置其他参数。} */
