<template>
	<b-navbar toggleable="lg" type="light" variant="light">
		<div class="container-fluid">
			<b-navbar-brand>
				<b-link to="/">
					<img src="/logo.png" width="180" alt="moneyline_logo">
				</b-link>
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-navbar-nav v-if="!isAuthenticated">
						<!-- When a user is not logged in -->

						<b-nav-item to="/">Home</b-nav-item>
						<b-nav-item to="/about-us">About Us</b-nav-item>
						<b-nav-item to="/faq">FAQ</b-nav-item>
						<b-nav-item to="/contact">Contact</b-nav-item>
						<b-link to="/loan/get-started">
							<b-button variant="primary">Apply Now</b-button>
						</b-link>
						<b-link to="/account/login">
							<b-button variant="secondary">Login</b-button>
						</b-link>
					</b-navbar-nav>
					<!-- Logged in auth -->
					<b-navbar-nav v-if="isAuthenticated">
						<b-nav-item to="/">Home</b-nav-item>
						<b-nav-item to="/about-us">About Us</b-nav-item>
						<b-nav-item to="/faq">FAQ</b-nav-item>
						<b-nav-item to="/contact">Contact</b-nav-item>
						<b-link to="/app/application">
							<b-button variant="success">New Application</b-button>
						</b-link>
						<b-link to="/account/login">
							<b-button variant="secondary" @click="logout">Logout</b-button>
						</b-link>
						<b-nav-item to="/app/me"><i class="fa fa-dashboard"></i> Dashboard</b-nav-item>
					</b-navbar-nav>
					<!-- <b-button variant="secondary">Login</b-button> -->

					<!-- <b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-nav-item-dropdown right>
					Using 'button-content' slot-->
					<!-- <template slot="button-content">
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>-->
				</b-navbar-nav>
			</b-collapse>
		</div>
	</b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Header",

	computed: {
		...mapGetters({
			isAuthenticated: "auth/authenticated"
		})
	},
	methods: {
		logout() {
			this.$store.dispatch("auth/logout");
			this.$router.push("/");
		}
	}
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
