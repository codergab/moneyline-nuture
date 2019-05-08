<template>
	<b-container style="margin: 5rem auto">
		<h3 class="text-center">Dashboard</h3>
		<b-card>
			<b-row>
				<b-col sm="4">
					<b-link to="/app/admin/users">
						<b-card>Manage Users</b-card>
					</b-link>
				</b-col>
				<b-col sm="4">
					<b-card>Manage Loans</b-card>
				</b-col>
				<b-col sm="4">
					<b-card>Profile</b-card>
				</b-col>
			</b-row>
		</b-card>
	</b-container>
</template>

<script>
export default {
	layout: "admin"
};
</script>

