import _ from 'lodash'
import './style.css'
import Icon from './favicon.ico'

function hello(str) {
    alert(str);
}
hello('hello world! webpack 4');

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    var myIcon = new Image()
    myIcon.src = Icon
    element.appendChild(myIcon)
    return element;
  }
  
  document.body.appendChild(component());

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
