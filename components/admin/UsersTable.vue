<template>
	<div>
		<div v-if="allUsers.length == 0">
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
		</div>
		<table class="table" v-if="allUsers.length > 0">
			<thead class="thead-light">
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>User Type</th>
					<th>Joined At</th>
					<th>Activated</th>
					<th class="text-center">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user, index) in allUsers" :key="index">
					<td>{{ index + 1 }}</td>
					<td>{{ `${user.first_name} ${user.last_name}` }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.phone }}</td>
					<td>{{ user.roles[0].display_name }}</td>
					<td>
						<span
							class="badge"
							:class="user.verified == 1 ? 'badge-success' : 'badge-warning'"
						>{{ user.verified == 1 ? 'Verified' : 'Pending' }}</span>
					</td>
					<td>{{ user.created_at }}</td>
					<td class="text-center">
						<b-button-group>
							<b-button size="xs" variant="primary">View</b-button>
							<b-button size="xs" variant="info">Edit</b-button>
							<b-button size="xs" variant="danger">Delete</b-button>
						</b-button-group>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
// import { mapGetters, mapActions, mapState } from "vuex";
// import
import { ContentLoader } from "vue-content-loader";
export default {
	name: "UserTable",
	components: {
		ContentLoader
	},
	data() {
		return {
			allUsers: []
		};
	},
	mounted() {
		this.fetchUsers();
		this.setUsers();
	},
	// computed: {
	// 	users() {
	// 		this.$store.state.users;
	// 	}
	// 	// state.users
	// 	// ...mapGetters(["getUsers"])
	// },
	methods: {
		fetchUsers() {
			this.$store.dispatch("users/fetchUsers");
		},
		setUsers() {
			setTimeout(() => {
				this.allUsers = this.$store.state.users.users;
			}, 2000);
		}
	}
};
</script>


