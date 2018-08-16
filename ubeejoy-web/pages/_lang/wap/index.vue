<template>
	<div>
		<wap-banner></wap-banner>
		<wap-game-center></wap-game-center>
	</div>
</template>

<script>
	import wapBanner from '~/components/wap/swiper.vue'
	import wapGameCenter from '~/components/wap/games.vue'
	import wapHeader from '~/components/wap/header.vue'
	import wapNavbar from '~/components/wap/navbar.vue'
	export default{
		layout: 'wapIndex',	//引用wap端布局文件
		components: {
			wapBanner,
			wapGameCenter,
			wapHeader,
			wapNavbar,
		},
		created(){
//			if (process.client){
//				//刷新页面不会执行中间件，只能在做判断
//				if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && (this.$router.options.base.indexOf('/wap') < 0)){
//					this.$router.push('/wap');
//				}
//			}
//			this.$router.replace('/' + this.$store.state.locale);
		},
		mounted(){
			if(process.client){
				//刷新页面不会执行中间件，只能在做判断
				if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && (this.$router.options.base.indexOf('/wap') < 0)){
					this.$router.replace('/' + this.$store.state.locale);
				}
			}
		},
		methods: {
			getUrlParams: function() {
				let pairs = location.search.substring(1).split('&');
				for(let i = 0; i < pairs.length; i++) {
					let pos = pairs[i].indexOf('=');
					if(pos === -1) {
						continue;
					}
					this.urlParams[pairs[i].substring(0, pos)] = decodeURIComponent(pairs[i].substring(pos + 1));
				}
			},
			queryOrderStatus(){
				let $this = this;
				let url = '/api/recharge/queryOrderStatus.json?orderId=' + this.orderId;
				request.get(url, {}).then(function(resolve) {
					if(!resolve.code) {
						$this.maskWin = true;
						if(resolve.data.status == 1){ //成功
							$this.sucWin = true;
						}else{	//失败
							 $this.errorWin = true;
						}
					} else {
					}
				}, function(reject) {})
			},
			closeWin(){
				this.maskWin = false;
				this.sucWin = false;
				this.errorWin = false;
			}
		}
	}
</script>