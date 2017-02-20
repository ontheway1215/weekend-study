//es6语法:
import Vue from "../node_modules/vue/dist/vue.min.js";//其实不用写完，会自动查找。可以直接写成import Vue from "vue";
//外部引入别的库都可以用这样的方式，比如jQuery等。
//引入我们编写的测试用vue文件。
import app from './components/app';



Vue.config.debug = true;//开启语法错误提示

new Vue(app);
