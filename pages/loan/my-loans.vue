<template>
<div class="col-md-11 mt-5 mb-5 mx-auto">
    Hello
</div>
</template>

<script>
export default {
    layout: 'user',
    data() {
        return {

        }
    },
    mounted() {
        this.getUserLoans();
    },
    methods: {
        getUserLoans() {
            this.$axios.get('/loans/me').then(res => {

            })
        }
    }
}
</script>