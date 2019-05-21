<template>
	<div>
		<h6 class style="background: #015786; color: #fff; padding: 15px; ">Loan Applications</h6>
		<table class="table table-striped table">
			<thead>
				<tr>
					<th>Appliction ID</th>
					<th>Amount Requested (&#8358;)</th>
					<th>Date Requested</th>
					<th>Status</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(loan, i) in loans" :key="i">
					<td>{{ loan._idd }}</td>
					<td>₦{{ loan.request_amount | numFormat }}</td>
					<td>{{ loan.created_at }}</td>
					<td>
						<span class="badge badge-warning" v-if="loan.loan_status.name == 'pending'">Pending</span>
						<span class="badge badge-info" v-if="loan.loan_status.name == 'review'">Review</span>
						<span class="badge badge-success" v-if="loan.loan_status.name == 'success'">Success</span>
						<span class="badge badge-danger" v-if="loan.loan_status.name == 'declined'">Declined</span>
						<span class="badge badge-success" v-if="loan.loan_status.name == 'disbursed'">Disbursed</span>
						<span class="badge badge-success" v-if="loan.loan_status.name == 'repaid'">Repaid</span>
					</td>
					<td>
						<b-link to="/loans/">
							<button class="btn btn-success btn-sm">View</button>
						</b-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	layout: "admin",
	components: {},
	data() {
		return {
			loans: []
		};
	},
	mounted() {
		this.getUserLoans();
	},
	methods: {
		getUserLoans() {
			this.$axios.get("/loans").then(res => {
				const { data: loans } = res.data.data;
				loans.forEach(loan => {
					this.loans.push(loan);
				});
				// [...this.data1, requested_amount: numberComma(this.data1.requested_amount)]
			});
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
