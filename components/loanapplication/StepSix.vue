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
                                    <label class="label">Fullname <span class="text-danger">*</span></label>
                                    <input type="text" name="Fullname of first guarantor" v-model="model.g_name[0]" v-validate="'required'" class="form-control" placeholder="Enter Name">
                                    <span class="error">{{ errors.first('Fullname of first guarantor') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Phone <span class="text-danger">*</span></label>
                                    <input type="text" name="Phone of first guarantor" v-model="model.g_phone[0]" v-validate="'required|numeric|min:13|max:13'" class="form-control" placeholder="Enter Phone Number">
                                    <span class="error">{{ errors.first('Phone of first guarantor') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Email <span class="text-danger">*</span></label>
                                    <input type="text" name="Email of first guarantor" v-model="model.g_email[0]" v-validate="'required|email'" class="form-control" placeholder="Enter Phone Number">
                                    <span class="error">{{ errors.first('Email of first guarantor') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">House Address <span class="text-danger">*</span></label>
                                    <input type="text" name="Home Address of first guarantor" v-model="model.g_home_address[0]" v-validate="'required'" class="form-control" placeholder="Enter Home Address">
                                    <span class="error">{{ errors.first('Home Address of first guarantor') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Office Address <span class="text-danger">*</span></label>
                                    <input type="text" name="Office Address of first guarantor" v-model="model.g_office_address[0]" v-validate="'required'" class="form-control" placeholder="Enter Office Address">
                                    <span class="error">{{ errors.first('Office Address of first guarantor') }}</span>
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
                                    <label class="label">Fullname <span class="text-danger">*</span></label>
                                    <input type="text" name="Fullname of second guarantor" v-model="model.g_name[1]" v-validate="'required'" class="form-control" placeholder="Enter Name">
                                    <span class="error">{{ errors.first('Fullname of second guarantor') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Phone <span class="text-danger">*</span></label>
                                    <input type="text" name="Phone of second guarantor" v-model="model.g_phone[1]" v-validate="'required|numeric|min:13|max:13'" class="form-control" placeholder="Enter Phone Number">
                                    <span class="error">{{ errors.first('Phone of second guarantor') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Email <span class="text-danger">*</span></label>
                                    <input type="text" name="Email of second guarantor" v-model="model.g_email[1]" v-validate="'required|email'" class="form-control" placeholder="Enter Phone Number">
                                    <span class="error">{{ errors.first('Email of second guarantor') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">House Address <span class="text-danger">*</span></label>
                                    <input type="text" name="Home Address of second guarantor" v-model="model.g_home_address[1]" v-validate="'required'" class="form-control" placeholder="Enter Home Address">
                                    <span class="error">{{ errors.first('Home Address of second guarantor') }}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="label">Office Address <span class="text-danger">*</span></label>
                                    <input type="text" name="Office Address of second guarantor" v-model="model.g_office_address[1]" v-validate="'required'" class="form-control" placeholder="Enter Office Address">
                                    <span class="error">{{ errors.first('Office Address of second guarantor') }}</span>
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
                g_name: [],
                g_phone: [],
                g_email: [],
                g_home_address: [],
                g_office_address: [],
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