<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="label">Title</label>
                    <select class="form-control">
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                        <option>Dr.</option>
                        <option>Other.</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label class="label">Gender</label>
                    <select class="form-control">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="label">Surname</label>
                    <input type="text" class="form-control" placeholder="Enter your surname">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="label">Firstname</label>
                    <input type="text" class="form-control" placeholder="Enter your lastname">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="label">Other Name</label>
                    <input type="text" class="form-control" placeholder="Enter your lastname">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StepOne",
    methods: {
    },
    mounted() {
        this.$emit('can-continue', {value: true});
    },
};
</script>