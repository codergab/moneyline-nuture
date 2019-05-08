<template>
	<b-container>
		<div class="form-wrapper">
			<h3 class="text-center">Welcome Back</h3>
			<b-card style="box-shadow: 0px 0px 9px #f3f3f3; border: 0">
				<b-form @submit="submitForm" v-if="show">
					<b-form-group label="Email address:" label-for="input-1">
						<b-form-input
							id="input-1"
							v-model="login.email"
							type="email"
							required
							placeholder="Enter email"
						></b-form-input>
					</b-form-group>

					<b-form-group id="input-group-2" label="Password:" label-for="input-2">
						<b-form-input id="input-2" v-model="login.password" required placeholder="*************"></b-form-input>
					</b-form-group>
					<b-checkbox v-model="login.remember">Remember Me</b-checkbox>
					<b-form-group>
						<b-button
							@click.prevent="submitForm()"
							:disabled="loading"
						>{{ loading ? 'Logging In...' : 'Login' }}</b-button>
					</b-form-group>
				</b-form>
			</b-card>
		</div>
	</b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	data() {
		return {
			login: {
				email: null,
				password: null,
				remember: false
			},
			loading: false,
			show: true
		};
	},
	mounted() {},
	methods: {
		submitForm() {
			if (this.login.email && this.login.password) {
				this.loading = true;
				this.$axios
					.$post("sign-in", this.login)
					.then(response => {
						const { data: loggedDetails } = response;
						console.log(loggedDetails);
						this.$axios.setHeader(
							"Authorization",
							`${loggedDetails.token}`
						);

						this.$store.dispatch(
							"auth/authenticate",
							loggedDetails
						);
						this.$router.push("/app/me");
					})
					.catch(err => {
						this.loading = false;
						console.log(err.response);
						const { error } = err.response.data;

						if (error) {
							this.$noty.error(error);
						} else {
							this.$noty.error(
								`${err.response.statusText}, Please Try Again`
							);
						}
					});
			} else {
				this.$noty.error("Please Fill in your credentials");
			}
			// alert(JSON.stringify(this.login));
		}
		// ...mapActions({
		// 'authentica'
		// })
	}
};
</script>

<style>
.form-wrapper {
	max-width: 50%;
	margin: 5rem auto;
}
</style>
