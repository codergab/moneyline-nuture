<template>
	<div class="bg-light border-right" id="sidebar-wrapper">
		<div class="sidebar-heading">{{ fullName }}</div>
		<div class="list-group list-group-flush">
			<nuxt-link to="/app/admin/dashboard" class="list-group-item list-group-item-action bg-light">
				Dashboard
				<i class="fa fa-dashboard pull-right"></i>
			</nuxt-link>
			<nuxt-link to="/app/admin/users" class="list-group-item list-group-item-action bg-light">
				Users
				<i class="fa fa-user pull-right"></i>
			</nuxt-link>
			<nuxt-link to="/app/admin/loans" class="list-group-item list-group-item-action bg-light">
				Loans
				<i class="fa fa-money pull-right"></i>
			</nuxt-link>
			<nuxt-link to="/app/admin/my-profile" class="list-group-item list-group-item-action bg-light">
				Profile
				<i class="fa fa-user pull-right"></i>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters({
			fullName: "auth/authUser"
		})
	}
};
</script>
