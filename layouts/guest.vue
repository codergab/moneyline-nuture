<template>
	<b-container>
		<!-- <Header/> -->

		<div style="margin: 3rem auto">
			<center>
				<b-link to="/">
					<img src="/logo.png" width="250">
				</b-link>
			</center>
		</div>
		<nuxt/>

		<!-- <Footer/> -->
	</b-container>
</template>

<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "vuejs-noty/dist/vuejs-noty.css";
export default {
	components: {
		Header,
		Footer
	}
};
</script>


<style>
html {
	font-family: "Lato", "Lato" sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
</style>
