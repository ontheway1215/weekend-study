<script>
	export default {
		data () {
			return {
				hello: "这里是嵌套路由！！！"
			}
		}
	}
</script>

<template>
	<div>
		<h1>{{hello}}</h1>
		<h2>{{hello}}</h2>
		<h3>{{hello}}</h3>
		<h4>{{hello}}</h4>
		<div class="box"></div>
	</div>
</template>

<style scoped>
	div {
		text-shadow: 1px 1px 10px #000;
	}
	.box {
		width: 100px;
		height: 100px;
		background: url(../images/case-cell-ali.png) no-repeat;
	}
</style>