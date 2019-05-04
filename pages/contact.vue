<template>
	<div>
		<Header/>
		<div>
			<b-jumbotron class="bg_artboard_1" style="height:400px">
					<p class="text-white jumbotron_content">We provide <span class="bold">smart loans</span><br>designed to put you at <br>ease</p>
			</b-jumbotron>
		</div>
	</div>
</template>
<script>
import Header from "@/components/layouts/Header";
export default {
	"name":"Contact",
	data(){
		return {

		}
	},
	components: {
		Header
	}
};
</script>

<style scoped>
	.bg_artboard_1{
		background-image:  url('/Artboard – 1.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
	.bold{
		font-weight: 600
	}
	.jumbotron_content{
		font-size: 22px
	}
</style>

