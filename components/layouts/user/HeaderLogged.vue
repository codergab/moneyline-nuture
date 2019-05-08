<template>
	<b-navbar toggleable="lg" type="light" variant="light">
		<div class="container-fluid">
			<b-navbar-brand href="#">
				<img src="/logo.png" width="200" alt="Kitten">
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-navbar-nav>
						<b-nav-item to="/">Home</b-nav-item>
						<b-nav-item to="/about-us">About Us</b-nav-item>
						<b-nav-item to="/faq">FAQ</b-nav-item>
						<b-nav-item to="/contact">Contact</b-nav-item>
                        
						<b-link to="/account/login">
							<b-button variant="secondary">Logout</b-button>
						</b-link>
					</b-navbar-nav>
				</b-navbar-nav>
			</b-collapse>
		</div>
	</b-navbar>
</template>

<script>
export default {
	name: "Header"
};
</script>


<style scoped>
.navbar {
	padding: 1rem 1rem;
}

.bg-light {
	background-color: #ffffff !important;
	box-shadow: 0px 1px 9px rgba(193, 193, 193, 0.1);
}
</style>
