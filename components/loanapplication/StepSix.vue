<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="row">
            <div class="col-md-11 mx-auto">
                <div class="row">
                    <div class="col-md-6">
                        <h5>Guarantor 1</h5>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Name <span class="text-danger">*</span></label>
                                    <input type="text" name="name1" v-validate="'required'" class="form-control" placeholder="Enter Name">
                                    <span class="error">{{ errors.first('name1') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Phone <span class="text-danger">*</span></label>
                                    <input type="text" name="phone1" v-validate="'required|numeric'" class="form-control" placeholder="Enter Phone Number">
                                    <span class="error">{{ errors.first('phone1') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Email <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Email Address">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">House Address <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter House Address">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Office Address <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Office Address">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h5>Guarantor 2</h5>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Name">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Phone <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Phone Number">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Email <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Email Address">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">House Address <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter House Address">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Office Address <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Office Address">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
<script>
export default {
    name: "StepSix",
    data() {
        return {
            model: {
                employee_business_owner: 'employee'
            }
        }
    },
    methods: {
        validate() {

           return  this.$validator.validate().then(valid => {
				if (valid) {
                    this.$emit('on-validate', valid, this.model);
					return true;
				}else{
					return false
				}
			})

        }
    },
    mounted() {
    },
};
</script>