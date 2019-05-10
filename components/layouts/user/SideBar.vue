<template>
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">{{ fullName }}</div>
        <div class="list-group list-group-flush">
            <nuxt-link to="/app/dashboard" class="list-group-item list-group-item-action bg-light">
                Dashboard
                <i class="fa fa-dashboard pull-right"></i>
            </nuxt-link>
            <nuxt-link to="/app/my-profile" class="list-group-item list-group-item-action bg-light">
                Profile
                <i class="fa fa-user pull-right"></i>
            </nuxt-link>
            <nuxt-link to="/app/me" class="list-group-item list-group-item-action bg-light">
                Loans
                <i class="fa fa-money pull-right"></i>
            </nuxt-link>
            <!-- <a href="#" class="list-group-item list-group-item-action bg-light">Applications <i class="fa fa-user"></i></a> -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
			fullName: "auth/authUser"
		})
    },
}
</script>
