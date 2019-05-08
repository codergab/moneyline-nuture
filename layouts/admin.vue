<template>
	<div>
		<Header/>
		<div v-if="this.$route.path !== '/app/admin/dashboard'">
			<Hero/>
		</div>
		<nuxt/>
		<Footer/>
	</div>
</template>

<script>
import Header from "@/components/layouts/HeaderLogged";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/layouts/Hero";
export default {
	middleware: "admin",
	components: {
		Header,
		Footer,
		Hero
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
