<template>
	<b-container style="margin: 5rem auto">
		<h3 class="text-center">Dashboard</h3>
		<b-card>
			<b-row>
				<b-col sm="3">
					<b-link to="/app/admin/users">
						<b-card bg-variant="success" class="text-center">
							<span class="icon text-center">
								<i class="fa fa-user text-white fa-3x text-center"></i>
							</span>
							<h3 class="text-center text-white font-weight-bold">Manage Users</h3>
						</b-card>
					</b-link>
				</b-col>
				<b-col sm="3">
					<b-link to="/app/admin/users">
						<b-card bg-variant="secondary" class="text-center">
							<span class="icon text-center">
								<i class="fa fa-money text-white fa-3x text-center"></i>
							</span>
							<h3 class="text-center text-white font-weight-bold">Manage Loans</h3>
						</b-card>
					</b-link>
				</b-col>
				<b-col sm="3">
					<b-link to="/app/admin/users">
						<b-card bg-variant="primary" class="text-center">
							<span class="icon text-center">
								<i class="fa fa-money text-white fa-3x text-center"></i>
							</span>
							<h3 class="text-center text-white font-weight-bold">Profile</h3>
						</b-card>
					</b-link>
				</b-col>
				<b-col sm="3">
					<b-link to="/app/admin/users">
						<b-card bg-variant="warning" class="text-center">
							<span class="icon text-center">
								<i class="fa fa-money text-white fa-3x text-center"></i>
							</span>
							<h3 class="text-center text-white font-weight-bold">Logout</h3>
						</b-card>
					</b-link>
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

