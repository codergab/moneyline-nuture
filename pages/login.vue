<template>
	<b-container>
		<div class="form-wrapper">
			<h3 class="text-center">Login</h3>
			<b-card>
				<b-form @submit="submitForm" v-if="show">
					<b-form-group
						id="input-group-1"
						label="Email address:"
						label-for="input-1"
						description="We'll never share your email with anyone else."
					>
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
						<b-button @click.prevent="submitForm()">Login</b-button>
					</b-form-group>
				</b-form>
			</b-card>
		</div>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			login: {
				email: null,
				password: null,
				remember: false
			},

			show: true
		};
	},
	methods: {
		submitForm() {
			if (this.login.email && this.login.password) {
				localStorage.setItem("loginDetails", {
					...this.login.email,
					...this.login.password
				});
				this.$router.push("/app/dashboard");
			} else {
				alert("Please Enter Something");
			}
			// alert(JSON.stringify(this.login));
		}
	}
};
</script>

<style>
.form-wrapper {
	max-width: 50%;
	margin: 5rem auto;
}
</style>
