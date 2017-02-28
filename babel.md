##Babel转码器

Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。

```
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```
上面使用了箭头函数，需要Babel将其转换为ES5代码

##配置文件.babelrc

Babel的配置文件是.babelrc，存放在项目的根目录下。

该文件用来设置转码规则和插件，基本格式如下。

```
{
  "presets": [],
  "plugins": []
}
```
presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。

```
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```
然后，将这些规则加入.babelrc。

```
 {
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
 }
```
注意，以下所有Babel工具和模块的使用，都必须先写好.babelrc。

##命令行转码babel-cli
安装

```
$ npm install --global babel-cli
```
基本用法

```
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```
上面代码是在全局环境下，进行Babel转码。这意味着，如果项目要运行，全局环境必须有Babel，也就是说项目产生了对环境的依赖。另一方面，这样做也无法支持不同项目使用不同版本的Babel。

一个解决办法是将babel-cli安装在项目之中。
```
# 安装
$ npm install --save-dev babel-cli
```

然后，改写package.json。

```
{
  // ...
  "devDependencies": {
    "babel-cli": "^6.0.0"
  },
  "scripts": {
    "build": "babel src -d lib"
  },
}
```
转码的时候，就执行下面的命令。
```
$ npm run build
```

##babel-node

babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境。它支持Node的REPL环境的所有功能，而且可以直接运行ES6代码。

它不用单独安装，而是随babel-cli一起安装。然后，执行babel-node就进入REPL环境。

```
$ babel-node
> (x => x * 2)(1)
2
```

babel-node命令可以直接运行ES6脚本。将上面的代码放入脚本文件es6.js，然后直接运行。

```
$ babel-node es6.js
2
```

babel-node也可以安装在项目中。

```
$ npm install --save-dev babel-cli

```
然后，改写package.json

```
{
  "scripts": {
    "script-name": "babel-node script.js"
  }
}
```
上面代码中，使用babel-node替代node，这样script.js本身就不用做任何转码处理。

##babel-polyfill

Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

安装命令如下。

```
$ npm install --save babel-polyfill

```
然后，在脚本头部，加入如下一行代码。

```
import 'babel-polyfill';
// 或者
require('babel-polyfill');
```

下面是如何将代码打包成浏览器可以使用的脚本，以Babel配合Browserify为例。首先，安装babelify模块。

```
$ npm install --save-dev babelify babel-preset-es2015
```

然后，再用命令行转换ES6脚本。

```
$  browserify script.js -o bundle.js \
  -t [ babelify --presets [ es2015 ] ]
```

上面代码将ES6脚本script.js，转为bundle.js，浏览器直接加载后者就可以了。

在package.json设置下面的代码，就不用每次命令行都输入参数了。

```
{
  "browserify": {
    "transform": [["babelify", { "presets": ["es2015"] }]]
  }
}
```

