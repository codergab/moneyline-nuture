<template>
	<div class="col-md-11 mt-5 mb-5 mx-auto">
		<div class="d-flex" id="wrapper">
			<!-- Sidebar -->
			<SideBar/>
			<!-- /#sidebar-wrapper -->

			<!-- Page Content -->
			<div id="page-content-wrapper">
				<div style="padding-left:10px;">
					<h6 class style="background: #015786; color: #fff; padding: 15px; ">Your Loan Applications</h6>
					<table class="table table-striped table">
						<thead>
							<tr>
								<th>Appliction ID</th>
								<th>Amount Requested (&#8358;)</th>
								<th>Date Requested</th>
								<th>Status</th>
								<!-- <th>Actions</th> -->
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
								<!-- <td>
									<button class="btn btn-success btn-sm">View</button>
								</td>-->
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!-- /#page-content-wrapper -->
		</div>
		<!-- /#wrapper -->
	</div>
</template>

<style>
#sidebar-wrapper {
	min-height: 100vh;
	margin-left: -15rem;
	-webkit-transition: margin 0.25s ease-out;
	-moz-transition: margin 0.25s ease-out;
	-o-transition: margin 0.25s ease-out;
	transition: margin 0.25s ease-out;
	background: #015786 !important;
}

.container-fluid {
	width: 100%;
	/* padding-right: 80px !important; */
	/* padding-left: 80px !important; */
	margin-right: auto;
	margin-left: auto;
}

#sidebar-wrapper .sidebar-heading {
	padding: 0.875rem 1.25rem;
	font-size: 1.2rem;
	font-weight: bolder;
}

.bg-light {
	background: #015786 !important;
	color: #fff !important;
}

a.bg-light:hover {
	background: #4280a2 !important;
}

#sidebar-wrapper .list-group {
	width: 15rem;
}

#page-content-wrapper {
	min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
	margin-left: 0;
}

@media (min-width: 768px) {
	#sidebar-wrapper {
		margin-left: 0;
	}

	#page-content-wrapper {
		min-width: 0;
		width: 100%;
	}

	#wrapper.toggled #sidebar-wrapper {
		margin-left: -15rem;
	}
}
</style>

<script>
import { numberComma } from "@/utils/formatter";
import SideBar from "@/components/layouts/user/SideBar";
export default {
	layout: "user",
	components: {
		SideBar
	},
	data() {
		return {
			loans: []
		};
	},
	mounted() {
		this.getUserLoans();
		// this.checkLoans();
	},
	methods: {
		getUserLoans() {
			this.$axios.get("/loans/me").then(res => {
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