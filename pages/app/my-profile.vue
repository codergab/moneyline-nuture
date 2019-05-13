<template>
	<div class="col-md-11 mt-5 mb-5 mx-auto">
		<div class="d-flex" id="wrapper">
			<!-- Sidebar -->
			<SideBar />
			<!-- /#sidebar-wrapper -->

			<!-- Page Content -->
			<div id="page-content-wrapper">
				<div style="padding-left:10px;">

					<h6
						class=""
						style="background: #015786; color: #fff; padding: 15px; "
					>Your Profile</h6>
					<table class="table table-striped table">
						<tr>
                            <th>Firstname</th>
                            <td>{{ userProfile.first_name }}</td>
                        </tr>
                        <tr>
                            <th>Lastname</th>
                            <td>{{ userProfile.last_name }}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{{ userProfile.email }}</td>
                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <td>{{ userProfile.phone }}</td>
                        </tr>
					</table>
				</div>
			</div>
			<!-- /#page-content-wrapper -->
		</div>
		<!-- /#wrapper -->
	</div>
</template>

<style>
</style>

<script>
import { numberComma } from "@/utils/formatter";
import SideBar  from "@/components/layouts/user/SideBar";
export default {
	layout: "user",
	components: {
		SideBar
	},
	data() {
		return {
			data1: [],
            data2: [],
            userProfile: {}
		};
	},
	mounted() {
		this.getUserProfile();
	},
	methods: {
		getUserProfile() {
            this.userProfile = this.$store.state.auth.user.user;
		}

	}
};
</script>