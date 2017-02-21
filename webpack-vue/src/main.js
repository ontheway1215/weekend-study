// 引入vue以及vue-router
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 引入组件！直接使用es6的语法
import index from './components/app.vue';
import list from './components/list.vue';
import hello from './components/hello.vue';
// 开启debug模式
Vue.config.debug = true;//开启语法错误提示
// new Vue(app);这是上一篇用到的，新建一个vue实例，现在使用vue-router就不需啊哟啦。
// 路由器需要一个跟组件。
var App = Vue.extend({});
// 创建一个路由器实例
var router = new VueRouter();
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
//稍后我们会讲解嵌套路由
router.map({//定义路由映射
	'/index': {//访问地址
		name: 'index',//定义路由的名字。方便使用。
		component: index,//引用的组件名称，对应上面使用`import`导入的组件
		//component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过没有import集中引入那么直观
		subRoutes: {
			'/hello': {
				name: 'hello',
				component: hello
			}
		}
	},
	'/list': {
		name: 'list',
		component: list
	},
});
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
	'*': "/index"//重定向任意未匹配路径到/index
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');

