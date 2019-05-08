<template>
<div class="col-md-11 mt-5 mb-5 mx-auto">
    <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Johnbosco</div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Profile <i class="fa fa-user pull-right"></i></a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Loans <i class="fa fa-money pull-right"></i></a>
        <!-- <a href="#" class="list-group-item list-group-item-action bg-light">Applications <i class="fa fa-user"></i></a> -->
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">

      <div style="padding-left:10px;">
        <h6 class="" style="background: #2E9462; color: #fff; padding: 15px; ">Approved Loans</h6>
        <table class="table table-striped table">
            <thead>
                <tr>
                    <th>Appliction ID</th>
                    <th>Amount Requested (&#8358;)</th>
                    <th>Amount Approved (&#8358;)</th>
                    <th>Balance Due (&#8358;)</th>
                    <th>Date Approved</th>
                    <th>Repayment Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>738383893939393</td>
                    <td>500,000.00</td>
                    <td>300,000.00</td>
                    <td>100,000.00</td>
                    <td>01/03/2019</td>
                    <td>01/03/2019</td>
                    <td><span class="badge badge-warning">Running</span></td>
                    <td><button class="btn btn-success btn-sm">View</button></td>
                </tr>
                <tr>
                    <td>738383893939393</td>
                    <td>500,000.00</td>
                    <td>500,000.00</td>
                    <td>0.00</td>
                    <td>01/03/2019</td>
                    <td>01/03/2019</td>
                    <td><span class="badge badge-success">Completed</span></td>
                    <td><button class="btn btn-success btn-sm">View</button></td>
                </tr>
            </tbody>
        </table>

        <h6 class="mt-5" style="background: #015786; color: #fff; padding: 15px; ">Your Loan Applications</h6>
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
                <tr>
                    <td>7383838939</td>
                    <td>500,000.00</td>
                    <td>01/03/2019</td>
                    <td><span class="badge badge-danger">Declined</span></td>
                    <td><button class="btn btn-success btn-sm">View</button></td>
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
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
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
    background: #4280A2 !important;
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
export default {
    layout: 'user',
    data() {
        return {
            data1: [],
            data2: []
        }
    },
    mounted() {
        this.getUserLoans();
    },
    methods: {
        getUserLoans() {
            this.$axios.get('/loans/me').then(res => {
                this.data1 = res.data;
            })
        }
    }
}
</script>