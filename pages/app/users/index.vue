<template>
	<b-container>
		<div class="manage">
			<h2>{{ title }}</h2>
			<div>
				<b-tabs content-class="mt-3" align="right">
					<b-tab title="Manage Users" active @click.prevent="changeTitle('Manage Users')">
						<UserTable/>
					</b-tab>
					<b-tab title="Manage Loans" @click.prevent="changeTitle('Manage Loans')">
						<LoanTable/>
					</b-tab>
				</b-tabs>
			</div>
		</div>
	</b-container>
</template>

<script>
import UserTable from "@/components/UserTable";
import LoanTable from "@/components/LoanTable";
export default {
	layout: "admin",
	components: {
		UserTable,
		LoanTable
	},
	data() {
		return {
			title: "Manage Users"
		};
	},
	methods: {
		changeTitle(title) {
			this.title = title;
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
