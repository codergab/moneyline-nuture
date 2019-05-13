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
						<a href="/account/login">
							<b-button variant="secondary">Login</b-button>
						</a>
					</b-navbar-nav>
					<!-- Logged in auth -->
					<b-navbar-nav
						v-if="isAuthenticated && $store.state.auth.user.user.roles[0].name == 'customer'"
					>
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
						<b-nav-item to="/app/me">
							<i class="fa fa-dashboard"></i> Dashboard
						</b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav v-if="isAuthenticated && $store.state.auth.user.user.roles[0].name == 'admin'">
						<b-nav-item to="/app/admin/dashboard">
							<i class="fa fa-dashboard"></i> Dashboard
						</b-nav-item>
						<b-link to="/account/login">
							<b-button variant="secondary" @click="logout">Logout</b-button>
						</b-link>
					</b-navbar-nav>
					<!-- <b-navbar-nav v-if="isAuthenticated">
						<b-nav-item to="/">Home</b-nav-item>
						<b-nav-item to="/about-us">About Us</b-nav-item>
						<b-nav-item to="/faq">FAQ</b-nav-item>
						<b-nav-item to="/contact">Contact</b-nav-item>
						<b-link to="/app/admin/users">
							<b-button variant="success">Manage Users</b-button>
						</b-link>
						<b-link to="/account/login">
							<b-button variant="secondary" @click="logout">Logout</b-button>
						</b-link>
						<b-nav-item to="/app/admin/dashboard">
							<i class="fa fa-dashboard"></i> Dashboard
						</b-nav-item>
					</b-navbar-nav>-->
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
			// this.$store.dispatch("users/logout");
			this.$router.push("/");
		}
	}
};
</script>


<style scoped>
.navbar {
	/* padding: 1rem 1rem; */
}

.bg-light {
	background-color: #ffffff !important;
	box-shadow: 0px 1px 9px rgba(193, 193, 193, 0.1);
}

.navbar-toggler {
	border-radius: 0;
	padding: 0;
	border: 1px solid #40a774;
}

@media screen and (max-width: 560px) {
	.navbar-brand {
		margin-left: 1rem;
	}

	.navbar.navbar-light .container-fluid {
		padding: 0 !important;
	}

	.navbar-light .navbar-toggler {
		color: rgb(64, 167, 116);
		border-color: rgb(64, 167, 116);
	}

	.navbar {
		padding: 0 !important;
	}

	.navbar-toggler {
		margin: 0 1rem 0 0;
	}
	.navbar-collapse {
		background: #40a774;
		padding: 0 2rem;
	}

	.navbar-light .navbar-nav .nav-link {
		color: #fff;
	}
}
</style>
