<template>
	<div>
		<Header/>
		<div class="col-md-11 mt-5 mb-5 mx-auto">
			<div class="d-flex" id="wrapper">
				<!-- Sidebar -->
				<SideBar/>
				<div id="page-content-wrapper">
					<div style="padding-left:10px;">
						<nuxt/>
					</div>
				</div>
			</div>
		</div>

		<Footer/>
	</div>
</template>

<script>
import Header from "@/components/layouts/HeaderLogged";
import SideBar from "@/components/admin/SideBar";
import Footer from "@/components/layouts/Footer";
export default {
	middleware: "admin",
	components: {
		Header,
		Footer,
		SideBar
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
