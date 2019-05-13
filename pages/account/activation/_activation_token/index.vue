<template>
	<b-container>
		<b-row>
			<b-col lg="6" offset-lg="3" class="text-center mb-4" v-if="isAccountFound">
				<h3 class="text-center m-5">{{ loadingMessage }}</h3>

				<b-link to="/account/login">
					<b-button variant="primary">Login to my account</b-button>
				</b-link>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import { VERIFY_USER } from "~/utils/api-routes";
export default {
	data() {
		return {
			loadingMessage: "Activating Your Account, Please Wait",
			isAccountFound: true
		};
	},
	mounted() {
		const activationToken = this.$route.params.activation_token;
		this.$axios
			.get(`${VERIFY_USER}/${activationToken}`)
			.then(response => {
				console.log(response.data);
				if (response.data.status) {
					this.loadingMessage = response.data.message;
					this.$noty.success(response.data.message);
					setTimeout(() => {
						this.$router.push("/account/login");
					}, 2000);
				}
			})
			.catch(err => {
				this.loadingMessage = err.response.data.error;
				this.$noty.error(err.response.data.error);
			});
	}
};
</script>
