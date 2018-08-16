<template>
	<section class="container">
		<div class="wap">
			<wap-navbar2></wap-navbar2>
			<wapSomeMessage :message="message"></wapSomeMessage>
		</div>
	</section>
</template>

<script>
	import request from "~/service";

	/*wap*/
	import wapNavbar2 from '~/components/wap/navbar2.vue'
	import wapSomeMessage from "~/components/wap/someMessage.vue";

	export default {
		layout: 'private',
		components: {
			/*wap*/
			wapNavbar2,
			wapSomeMessage
		},
		data() {
			return {
				message: {
					title: this.$t('terms.title'),
					content: 'THIS TERMS OF USE AGREEMENT (THESE "TERMS") IS A LEGALLY BINDING AGREEMENT THAT GOVERNS YOUR ACCESS AND USE OF THE GAMES, CONTENT, APPLICATIONS, ACTIVITIES, PURCHASES AND OTHER SERVICES (THE "SERVICES") OFFERED BY UBEEJOY GAMES AND THEIR AFFILIATES (HEREINAFTER "UBEEJOY" OR "US" OR "WE"). AFFILIATES SHALL MEAN ANY CORPORATION, PARTNERSHIP, OR OTHER ENTITY THAT, DIRECTLY OR INDIRECTLY, OWNS, IS OWNED BY, OR IS UNDER COMMON OWNERSHIP WITH, SUCH PARTY HERETO, FOR SO LONG AS SUCH OWNERSHIP EXISTS. FOR THE PURPOSES OF THE FOREGOING, “ OWN”, ”OWNED”, OR “OWNERSHIP” SHALL MEAN OWNERSHIP OF MORE THAN FIFTY PERCENT(50%) OF THE STOCK OR OTHER EQUITY INTERESTS ENTITLED TO VOTE FOR THE ELECTION OF DIRECTORS OR AN EQUIVALENT GOVERNING BODY. THE SERVICES MAY BE MADE AVAILABLE THROUGH OUR WEBSITE, THIRD PARTY SOCIAL NETWORKING WEBSITES, OR MOBILE VERSIONS THEREOF (THIS “SITE”). BY ACCESSING AND USING ANY SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE LEGALLY BOUND BY THESE TERMS.'
				}
			};
		},
		mounted() {
			this.$router.push('/'+ this.$store.state.locale +'/terms');
		}
	};
</script>

<style lang="scss" scoped>

</style>