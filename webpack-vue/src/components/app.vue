<script>
	//es6
	import hello from "./hello.vue"
	export default {
		//data:function(){}, 下面是es6语法
		data () {
			return {
				name: "chen",
				age: "24"
			}	   
		},

		methods: {
			golist () {
				this.$route.router.go({name: "list"});
			}
		},
		components: {
			hello
		}
	}
</script>
<template>
	<div>
		<h1>姓名：{{name}}</h1>
		<h2>{{age}}</h2>
		<button @click="golist">$route.router.go查看</button>
		<a v-link="{ name: 'list' }">v-link查看列表</a>
		<a v-link="{ name: 'index' }">回去主页</a>
		<a v-link="{ name: 'hello' }">嵌套的路由</a>
		<hello></hello>
		<router-view></router-view>
		<a v-link="{ n}"></a>
	</div>
</template>
<style lang="sass">
	$qwe:pink;
	body{
		background-color: $qwe;
		color: red;
	}
	h1{
		background-color: blue;
		color: red;
	}
	h2{
		background-color: purple;
	}
	a{
		font-size: 34px;
		color: black;
	}
</style>








