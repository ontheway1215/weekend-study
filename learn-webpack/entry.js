//import Vue from "vue" 如果你安装了babel-loader的话，可以直接用ES6
var Vue=require("vue");
	new Vue({
		el: "#app",
		data: {
			message: "This is my first webpack project!"
		}
	})
require("./first.js");
require("./style.css");
