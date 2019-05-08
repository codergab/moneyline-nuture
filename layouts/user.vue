<template>
	<div>
		<Header/>
		<nuxt/>
		<Footer/>
	</div>
</template>

<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { mapGetters } from "vuex";
export default {
	// middleware: "auth",
	components: {
		Header,
		Footer
	},
	computed: {
		...mapGetters({
			fullName: "auth/authUser"
		})
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
