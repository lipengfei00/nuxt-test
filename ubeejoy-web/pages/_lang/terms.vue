<template>
	<section class="container" style="background:#fff">
    <div class="pc">
      <navbar2></navbar2>
		  <someMessage :message="message"></someMessage>
    </div>
	</section>
</template>

<script>
import request from "~/service";
/*pc*/
import someMessage from "~/components/someMessage.vue";
import navbar2 from '~/components/navbar2.vue'

export default {
  components: {
    /*pc*/
    navbar2,
    someMessage,
  },
  data() {
    return {
        message:{
            title:this.$t('terms.title'),
            content:'THIS TERMS OF USE AGREEMENT (THESE "TERMS") IS A LEGALLY BINDING AGREEMENT THAT GOVERNS YOUR ACCESS AND USE OF THE GAMES, CONTENT, APPLICATIONS, ACTIVITIES, PURCHASES AND OTHER SERVICES (THE "SERVICES") OFFERED BY UBEEJOY GAMES AND THEIR AFFILIATES (HEREINAFTER "UBEEJOY" OR "US" OR "WE"). AFFILIATES SHALL MEAN ANY CORPORATION, PARTNERSHIP, OR OTHER ENTITY THAT, DIRECTLY OR INDIRECTLY, OWNS, IS OWNED BY, OR IS UNDER COMMON OWNERSHIP WITH, SUCH PARTY HERETO, FOR SO LONG AS SUCH OWNERSHIP EXISTS. FOR THE PURPOSES OF THE FOREGOING, “ OWN”, ”OWNED”, OR “OWNERSHIP” SHALL MEAN OWNERSHIP OF MORE THAN FIFTY PERCENT(50%) OF THE STOCK OR OTHER EQUITY INTERESTS ENTITLED TO VOTE FOR THE ELECTION OF DIRECTORS OR AN EQUIVALENT GOVERNING BODY. THE SERVICES MAY BE MADE AVAILABLE THROUGH OUR WEBSITE, THIRD PARTY SOCIAL NETWORKING WEBSITES, OR MOBILE VERSIONS THEREOF (THIS “SITE”). BY ACCESSING AND USING ANY SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE LEGALLY BOUND BY THESE TERMS.'
        }
    };
  },
  mounted(){
  	let storageLogin = localStorage.login=='true'?true:false;
	this.$store.commit('SET_LOGIN',storageLogin);
  	//刷新页面不会执行中间件，只能在做判断
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && (this.$router.options.base.indexOf('/wap') < 0)){
		this.$router.push('/wap/terms');
	}
  }
};
</script>

<style lang="scss" scoped>
   .container{
     padding-bottom: 105px;
   }
</style>