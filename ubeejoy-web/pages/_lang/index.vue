<template>
	<section class="container">
		<!--pc端-->
		<pcIndex></pcIndex>
	</section>
</template>

<script>
	import request from '~/service'

	/*pc*/
	import banner from '~/components/swiper.vue'
	import gameCenter from '~/components/games.vue'
	import navbar from '~/components/navbar.vue'
	import pcIndex from '~/components/index.vue'
	export default {
		middleware: 'authenticated',
		components: {
			/*pc*/
			navbar,
			banner,
			gameCenter,
			pcIndex,

		},
		data() {
			return {
				maskWin: false, //遮罩
				sucWin: false, //正确弹窗
				errorWin: false, //错误弹窗
				list: [],
				urlParams: [],
				orderId: ''
			}
		},
		created(){
		},
		mounted(){
			let storageLogin = localStorage.login=='true'?true:false;
			this.$store.commit('SET_LOGIN',storageLogin);
		}
	}
</script>

