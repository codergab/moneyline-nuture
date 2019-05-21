<template>
	<div>
		<h6 class style="background: #015786; color: #fff; padding: 15px; ">All Users</h6>

		<table class="table table-striped table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Fullname</th>
					<th>Email Address</th>
					<th>Phone Number</th>
					<th>User Type</th>
					<th>Status</th>
					<!-- <th>Actions</th> -->
				</tr>
			</thead>
			<tbody v-if="!loading">
				<tr v-for="(user, i) in allUsers" :key="i">
					<td>{{ i+1 }}</td>
					<td>{{ user.first_name }} {{ user.last_name }}</td>
					<td>{{ user.email}}</td>
					<td>{{ user.phone}}</td>
					<td>{{ user.roles[0].name }}</td>
					<td>
						<span class="badge badge-success" v-if="user.verified == 1">Verified</span>
						<span class="badge badge-warning" v-else>Pending Verification</span>
					</td>
					<!-- <td>
						<button class="btn btn-success btn-sm">View</button>
					</td>-->
				</tr>
			</tbody>
			<tbody v-if="loading">
				<tr>
					<td colspan="10">
						<content-loader
							:height="160"
							:width="1000"
							:speed="2"
							primaryColor="#f3f3f3"
							secondaryColor="#ecebeb"
						>
							<rect x="11.34" y="7.07" rx="0" ry="0" width="811.2" height="40.04"/>
							<rect x="11.34" y="68.07" rx="0" ry="0" width="823.2" height="44"/>
						</content-loader>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { ALL_USERS } from "~/utils/api-routes";
import { ContentLoader } from "vue-content-loader";
export default {
	layout: "admin",
	components: {
		ContentLoader
	},
	data() {
		return {
			allUsers: [],
			loading: true
		};
	},
	mounted() {
		this.fetchUsers();
	},
	methods: {
		fetchUsers() {
			this.$axios.get(ALL_USERS).then(response => {
				const { data } = response.data;
				this.allUsers = data.data;
				setTimeout(() => {
					this.loading = false;
				}, 1000);
			});
		},
		setUsers() {
			setTimeout(() => {
				this.$store.dispatch("users/fetchUsers", this.allUsers);
			}, 2000);
		}
	}
};
</script>


<style scoped>
.manage {
	padding: 1em;
	margin: 3em 0em;
	background: #fafafa;
}

.nav-tabs .nav-link.active {
	color: #495057;
	background-color: #fff;
	/* border-color: #dee2e6 #dee2e6 #fff; */
	box-shadow: 0px -3px 5px 0px rgba(226, 225, 22 5, 0.388) !important;
}
.nav-tabs .nav-link.active a {
	color: #000;
	font-weight: bold;
}
li.nav-item a.nav-link {
	color: #495057 !important;
	font-weight: 500;
}
</style>
