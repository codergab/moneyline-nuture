<template>
	<div class="col-md-11 mt-5 mb-5 mx-auto">
		<div class="d-flex" id="wrapper">
			<!-- Sidebar -->
			<SideBar />
			<!-- /#sidebar-wrapper -->

			<!-- Page Content -->
			<div id="page-content-wrapper">
				<div style="padding-left:10px;">

                    <div class="row">
                        <div class="col-xl-6 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Loan Balance</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">&#8358; 300,000.00</div>
                                    </div>
                                    <div class="col-auto">
                                    <i class="fa fa-credit-card-alt fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-md-6 mb-4">
                            <div class="card border-left-secondary shadow h-100 py-2">
                                <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Applications</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">3</div>
                                    </div>
                                    <div class="col-auto">
                                    <i class="fa fa-list-alt fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-12 col-md-12 mb-4">
                            <div class="card border-left-danger shadow h-100 py-2">
                                <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 text-danger">
                                        <h3 style="color: #999">Repayment Schedule</h3>
                                    </div>
                                    <div>
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Date Due <i class="fa fa-calendar"></i></th>
                                                    <th>Amount (NGN)</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>31st March 2019</td>
                                                    <td>150,000.00</td>
                                                    <td><span class="badge badge-success">Paid</span></td>
                                                </tr>
                                                <tr>
                                                    <td>30th April 2019 <span class="badge badge-danger">Overdue</span></td>
                                                    <td>150,000.00</td>
                                                    <td><span class="badge badge-warning">Pending</span></td>
                                                </tr>
                                                <tr>
                                                    <td>30th June 2019</td>
                                                    <td>150,000.00</td>
                                                    <td><span class="badge badge-warning">Pending</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>




                    </div>
					
				</div>
			</div>
			<!-- /#page-content-wrapper -->
		</div>
		<!-- /#wrapper -->
	</div>
</template>

<style scoped>
.border-left-primary {
    border-left: .25rem solid #015786 !important;
}
.border-left-secondary {
    border-left: .25rem solid #218838 !important;
}
.border-left-danger {
    border-left: .25rem solid indianred !important;
}
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